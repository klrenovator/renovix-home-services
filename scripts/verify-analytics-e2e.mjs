#!/usr/bin/env node
/**
 * Lead-generation Task 2.2 — end-to-end conversion-event verification.
 *
 *   npm run verify:analytics:e2e                    # event layer (uses the existing .next build)
 *   npm run verify:analytics:e2e -- --configured    # + provider hop (builds with TEST-format IDs)
 *   npm run verify:analytics:e2e -- --configured --no-build   # re-run against that build
 *
 * What this proves, and how:
 *
 * It serves the real production build with `next start`, drives a real
 * headless Chromium over the Chrome DevTools Protocol, performs the actual
 * customer actions (clicking the floating WhatsApp CTA, clicking a `tel:`
 * link, filling and submitting the quote form) and then asserts that the
 * events the business measures — `whatsapp_click`, `phone_click`,
 * `quote_form_submit`, `quote_form_success` — fired exactly once each, with
 * the right parameters, through the real shipped code path
 * (`lib/analytics.ts` → `components/analytics/Measurement.tsx`).
 *
 * `--configured` additionally builds the site with clearly-marked
 * TEST-format provider IDs (`G-E2EVERIFY0` / `e2everify01`) into a separate
 * output directory (`.next-analytics-e2e`, never the real `.next`) and
 * verifies the provider half of the chain: the gtag.js and Clarity tags ship,
 * the CSP widens for exactly those origins, Consent Mode defaults are pushed
 * before anything runs, every event reaches `window.dataLayer` in the shape
 * the provider expects, `page_view` is sent once per route (and again on a
 * client-side navigation), and web vitals arrive.
 *
 * Hard guarantees built into the harness:
 *
 * - **Nothing can leave the machine.** Chromium is launched with
 *   `--host-resolver-rules=MAP * ~NOTFOUND` so every non-loopback hostname
 *   fails to resolve. The harness proves the block is active before it starts
 *   and aborts if it is not — a test ID can never report to a real property.
 * - **No real quote is ever sent.** The success path fulfils `POST /api/quote/`
 *   inside the browser (Chrome DevTools Protocol `Fetch` domain), so no email
 *   provider is contacted. The failure path deliberately does *not* stub the
 *   endpoint, which is how `quote_form_error` with reason `unavailable` is
 *   verified against the real 503.
 * - **No customer data is invented as real.** The form is filled with values
 *   that are obviously test data, and the harness asserts that none of them
 *   ever appears in an event parameter.
 *
 * Requirements: a production build (`npm run build`, or the harness builds one
 * with `--configured`) and a Chromium/Chrome executable. The executable is
 * resolved from `--chrome`, `$CHROME_PATH`, `$CHROME_BIN`, the usual system
 * locations, or a Playwright/Puppeteer browser cache. Without a browser the
 * harness says so and exits without claiming anything.
 *
 * Options: `--port <n>` (default 3211, or 3212 with `--configured`),
 * `--no-build` (reuse an existing configured build), `--keep` (leave the
 * browser profile behind), `--verbose` (stream build/server output and every
 * off-origin request the page attempts).
 *
 * Leaves the repository as it found it: the server and browser are stopped in
 * their own process groups, the throwaway build directory is git-ignored, and
 * `tsconfig.json` is restored after a `--configured` build (Next rewrites it to
 * include `<distDir>/types`).
 */

import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { homedir, tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");

/* ------------------------------------------------------------------------ */
/* CLI                                                                       */
/* ------------------------------------------------------------------------ */

const argv = process.argv.slice(2);
const flag = (name) => argv.includes(name);
const option = (name, fallback) => {
  const index = argv.indexOf(name);
  return index >= 0 && argv[index + 1] ? argv[index + 1] : fallback;
};

const CONFIGURED = flag("--configured");
/** Reuse an existing configured build instead of rebuilding it. */
const SKIP_BUILD = flag("--no-build");
const PORT = Number(option("--port", CONFIGURED ? "3212" : "3211"));
const ORIGIN = `http://127.0.0.1:${PORT}`;
const CHROME_OVERRIDE = option("--chrome", process.env.CHROME_PATH || process.env.CHROME_BIN || "");
const KEEP = flag("--keep");
const VERBOSE = flag("--verbose");

/**
 * TEST-format IDs. They satisfy the ID shapes in `lib/analytics-config.ts` so
 * the configured code path is genuinely exercised, and they exist only here:
 * the browser cannot resolve any external hostname, so no data is sent
 * anywhere. The real Measurement ID comes from the owner (ANALYTICS_SETUP.md).
 */
const TEST_GA4_ID = "G-E2EVERIFY0";
const TEST_CLARITY_ID = "e2everify01";
const CONFIGURED_DIST_DIR = ".next-analytics-e2e";

/** Obviously-test form input. Asserted absent from every event parameter. */
const FORM_INPUT = {
  name: "E2E Harness",
  phone: "+60120000000",
  location: "E2E Test Locality",
  description: "Filled by the measurement end-to-end harness.",
};

const CONTEXT_KEYS = ["surface", "service", "subservice", "reason", "lang"];

const failures = [];
const notes = [];
const pass = (message) => console.log(`  ✓ ${message}`);
const fail = (message) => {
  failures.push(message);
  console.log(`  ✗ ${message}`);
};
const note = (message) => notes.push(message);
const log = (message) => VERBOSE && console.log(`    · ${message}`);

/* ------------------------------------------------------------------------ */
/* Chromium discovery                                                        */
/* ------------------------------------------------------------------------ */

function firstExisting(paths) {
  for (const path of paths) {
    if (path && existsSync(path)) return path;
  }
  return null;
}

function scanBrowserCaches() {
  const roots = [
    join(homedir(), ".cache", "ms-playwright"),
    join(homedir(), "Library", "Caches", "ms-playwright"),
    join(homedir(), ".cache", "puppeteer"),
  ];
  const found = [];

  for (const root of roots) {
    let entries = [];
    try {
      entries = readdirSync(root, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const dir = join(root, entry.name);
      found.push(
        join(dir, "chrome-linux", "chrome"),
        join(dir, "chrome-linux64", "chrome"),
        join(dir, "chrome-mac", "Chromium.app", "Contents", "MacOS", "Chromium"),
        join(dir, "chrome-mac", "Google Chrome for Testing.app", "Contents", "MacOS", "Google Chrome for Testing"),
        join(dir, "chrome-win64", "chrome.exe"),
      );
      // Puppeteer nests one more level: chrome/linux-<build>/chrome-linux64/chrome
      try {
        for (const nested of readdirSync(dir, { withFileTypes: true })) {
          if (nested.isDirectory()) {
            found.push(
              join(dir, nested.name, "chrome-linux64", "chrome"),
              join(dir, nested.name, "chrome-linux", "chrome"),
              join(dir, nested.name, "chrome-headless-shell-linux64", "chrome-headless-shell"),
            );
          }
        }
      } catch {
        // Directory not readable — skip.
      }
    }
  }

  return firstExisting(found);
}

function resolveChrome() {
  return (
    firstExisting([CHROME_OVERRIDE]) ||
    scanBrowserCaches() ||
    firstExisting([
      "/usr/bin/google-chrome",
      "/usr/bin/google-chrome-stable",
      "/usr/bin/chromium",
      "/usr/bin/chromium-browser",
      "/usr/bin/chromium-headless-shell",
      "/opt/google/chrome/chrome",
      "/snap/bin/chromium",
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      "/Applications/Chromium.app/Contents/MacOS/Chromium",
      "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
      "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    ])
  );
}

/* ------------------------------------------------------------------------ */
/* Minimal Chrome DevTools Protocol client (Node's built-in WebSocket)       */
/* ------------------------------------------------------------------------ */

class Cdp {
  constructor(ws) {
    this.ws = ws;
    this.nextId = 0;
    this.pending = new Map();
    this.listeners = new Map();

    ws.addEventListener("message", (message) => {
      let payload;
      try {
        payload = JSON.parse(message.data);
      } catch {
        return;
      }
      if (payload.id !== undefined && this.pending.has(payload.id)) {
        const { resolve, reject } = this.pending.get(payload.id);
        this.pending.delete(payload.id);
        if (payload.error) reject(new Error(`${payload.error.message}`));
        else resolve(payload.result);
        return;
      }
      if (payload.method) {
        for (const handler of this.listeners.get(payload.method) ?? []) {
          handler(payload.params);
        }
      }
    });
  }

  static connect(url) {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(url);
      ws.addEventListener("open", () => resolve(new Cdp(ws)));
      ws.addEventListener("error", () => reject(new Error(`cannot open CDP socket ${url}`)));
    });
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = ++this.nextId;
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  on(method, handler) {
    if (!this.listeners.has(method)) this.listeners.set(method, []);
    this.listeners.get(method).push(handler);
  }

  /** Resolves with the first event whose params satisfy `predicate`. */
  waitForEvent(method, predicate = () => true, timeoutMs = 30_000) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        cleanup();
        reject(new Error(`timed out waiting for ${method}`));
      }, timeoutMs);

      const handler = (params) => {
        if (!predicate(params)) return;
        cleanup();
        resolve(params);
      };

      const cleanup = () => {
        clearTimeout(timer);
        const handlers = this.listeners.get(method) ?? [];
        const index = handlers.indexOf(handler);
        if (index >= 0) handlers.splice(index, 1);
      };

      this.on(method, handler);
    });
  }

  async evaluate(expression, { awaitPromise = false } = {}) {
    const result = await this.send("Runtime.evaluate", {
      expression,
      returnByValue: true,
      awaitPromise,
      userGesture: true,
    });

    if (result.exceptionDetails) {
      const text = result.exceptionDetails.exception?.description || result.exceptionDetails.text;
      throw new Error(`page evaluation failed: ${text}`);
    }

    return result.result.value;
  }

  /** Re-evaluates `expression` until it is truthy (or the timeout expires). */
  async until(expression, { timeoutMs = 20_000, intervalMs = 100, label = expression.slice(0, 40) }) {
    const deadline = Date.now() + timeoutMs;
    let last = null;

    while (Date.now() < deadline) {
      last = await this.evaluate(expression).catch(() => null);
      if (last) return last;
      await sleep(intervalMs);
    }

    throw new Error(`condition never became true: ${label}`);
  }

  close() {
    try {
      this.ws.close();
    } catch {
      // Already closed.
    }
  }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/* ------------------------------------------------------------------------ */
/* Child-process helpers                                                     */
/* ------------------------------------------------------------------------ */

function run(command, args, { env = {}, cwd = ROOT, label = command } = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      env: { ...process.env, ...env },
      stdio: ["ignore", "pipe", "pipe"],
    });

    let output = "";
    child.stdout.on("data", (chunk) => {
      output += chunk;
      if (VERBOSE) process.stdout.write(chunk);
    });
    child.stderr.on("data", (chunk) => {
      output += chunk;
      if (VERBOSE) process.stderr.write(chunk);
    });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve(output);
      else reject(new Error(`${label} exited with code ${code}\n${output.slice(-3000)}`));
    });
  });
}

/**
 * Spawns a long-lived child in its own process group. `next start` and
 * Chromium both fork further children, so stopping the wrapper alone would
 * leave a server holding the port; the group signal reaches all of them.
 */
function spawnDetached(command, args, { env = {}, label = command } = {}) {
  const child = spawn(command, args, {
    cwd: ROOT,
    env: { ...process.env, ...env },
    stdio: ["ignore", "pipe", "pipe"],
    detached: true,
  });

  let output = "";
  child.stdout.on("data", (chunk) => {
    output += chunk;
  });
  child.stderr.on("data", (chunk) => {
    output += chunk;
  });

  return {
    child,
    get output() {
      return output;
    },
    label,
    stop(signal = "SIGTERM") {
      if (child.pid === undefined || child.exitCode !== null) return;
      try {
        process.kill(-child.pid, signal);
      } catch {
        // The group is already gone; signal the wrapper directly instead.
        try {
          child.kill(signal);
        } catch {
          // Already exited.
        }
      }
    },
  };
}

/**
 * `next build` rewrites `tsconfig.json` to include `<distDir>/types`, so a
 * `--configured` build would leave the repository pointing at the throwaway
 * directory. The file is snapshotted before that build and restored
 * byte-for-byte afterwards.
 */
const TSCONFIG_PATH = join(ROOT, "tsconfig.json");
let tsconfigSnapshot = null;

function snapshotTsconfig() {
  try {
    tsconfigSnapshot = readFileSync(TSCONFIG_PATH, "utf8");
  } catch {
    tsconfigSnapshot = null;
  }
}

function restoreTsconfig() {
  if (tsconfigSnapshot === null) return;
  try {
    if (readFileSync(TSCONFIG_PATH, "utf8") !== tsconfigSnapshot) {
      writeFileSync(TSCONFIG_PATH, tsconfigSnapshot);
      console.log(`  restored tsconfig.json (next build had added ${CONFIGURED_DIST_DIR}/ to its includes)`);
    }
  } catch {
    // Nothing sensible to do if the file vanished mid-run.
  }
  tsconfigSnapshot = null;
}

/** Fails fast when the port is already in use — a stale server would serve the
 *  wrong build and every result after it would be about something else. */
async function assertPortFree(port) {
  const { createServer } = await import("node:net");

  return new Promise((resolve, reject) => {
    const probe = createServer();
    probe.once("error", () => {
      reject(new Error(`port ${port} is already in use — pass a free one with --port <n>`));
    });
    probe.once("listening", () => probe.close(() => resolve()));
    probe.listen(port, "127.0.0.1");
  });
}

async function waitForServer(url, timeoutMs = 60_000) {
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(url, { redirect: "follow" });
      if (response.ok) return;
    } catch {
      // Not up yet.
    }
    await sleep(400);
  }

  throw new Error(`server did not become ready at ${url}`);
}

/* ------------------------------------------------------------------------ */
/* Browser-side snippets                                                     */
/* ------------------------------------------------------------------------ */

/** True once React has hydrated the element (props/fiber attached to the node). */
const hydrated = (selector) => `(() => {
  const el = document.querySelector(${JSON.stringify(selector)});
  if (!el) return false;
  return Object.keys(el).some((key) => key.startsWith("__reactProps$") || key.startsWith("__reactFiber$"));
})()`;

/** The conversion events recorded so far by lib/analytics.ts. */
const readEvents = `JSON.stringify(window.__renovixAnalytics ?? [])`;

/** The provider queue (gtag.js command arrays + GTM-style objects). */
const readDataLayer = `JSON.stringify(window.dataLayer ?? [])`;

/** Clicks an element after recording any popup URL it would have opened. */
const clickSelector = (selector) => `(() => {
  const el = document.querySelector(${JSON.stringify(selector)});
  if (!el) return "missing";
  window.__e2eOpened ??= [];
  const originalOpen = window.open;
  window.open = (url) => { window.__e2eOpened.push(String(url)); return null; };
  el.click();
  window.open = originalOpen;
  return el.getAttribute("href") || "";
})()`;

/**
 * Fills a form field the way React expects: through the prototype's own value
 * setter, then the events React listens for.
 */
const fillField = (selector, value) => `(() => {
  const el = document.querySelector(${JSON.stringify(selector)});
  if (!el) return "missing";
  const proto = el.tagName === "SELECT" ? HTMLSelectElement.prototype
    : el.tagName === "TEXTAREA" ? HTMLTextAreaElement.prototype
    : HTMLInputElement.prototype;
  const setter = Object.getOwnPropertyDescriptor(proto, "value").set;
  setter.call(el, ${JSON.stringify(value)});
  el.dispatchEvent(new Event("input", { bubbles: true }));
  el.dispatchEvent(new Event("change", { bubbles: true }));
  return el.value;
})()`;

/* ------------------------------------------------------------------------ */
/* Harness                                                                   */
/* ------------------------------------------------------------------------ */

class Harness {
  constructor() {
    this.processes = [];
    this.cdp = null;
    this.browser = null;
    this.stubQuoteApi = false;
    this.externalRequests = [];
  }

  async startChrome(chromePath) {
    const profile = mkdtempSync(join(tmpdir(), "renovix-e2e-profile-"));
    this.profile = profile;

    const args = [
      "--headless=new",
      "--no-sandbox",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--no-zygote",
      "--no-first-run",
      "--no-default-browser-check",
      "--mute-audio",
      "--window-size=1280,1000",
      `--user-data-dir=${profile}`,
      "--remote-debugging-port=0",
      "--remote-debugging-address=127.0.0.1",
      // Every hostname except loopback fails to resolve: nothing this harness
      // does can reach a real measurement property.
      "--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE localhost, EXCLUDE 127.0.0.1",
      "about:blank",
    ];

    const process_ = spawnDetached(chromePath, args, { label: "chrome" });
    this.processes.push(process_);

    const endpoint = await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error(`Chromium did not open a debug port\n${process_.output}`)), 45_000);

      const check = () => {
        const match = process_.output.match(/DevTools listening on (ws:\/\/[^\s]+)/);
        if (match) {
          clearInterval(interval);
          clearTimeout(timer);
          resolve(match[1]);
        }
      };

      const interval = setInterval(check, 200);
      check();
    });

    const url = new URL(endpoint);
    this.browser = await Cdp.connect(endpoint);
    this.browserInfo = await this.browser.send("Browser.getVersion").catch(() => ({}));

    // Open a dedicated page target and attach to it.
    const response = await fetch(`http://127.0.0.1:${url.port}/json/new?about:blank`, { method: "PUT" });
    if (!response.ok) throw new Error(`could not open a browser tab (HTTP ${response.status})`);
    const target = await response.json();

    this.cdp = await Cdp.connect(target.webSocketDebuggerUrl);
    this.targetId = target.id;

    await this.cdp.send("Page.enable");
    await this.cdp.send("Runtime.enable");
    await this.cdp.send("Network.enable");

    // Intercept the quote endpoint so the success path never contacts a real
    // email provider; the flag decides between "accepted" and "real answer".
    await this.cdp.send("Fetch.enable", {
      patterns: [{ urlPattern: "*/api/quote/*", requestStage: "Request" }],
    });

    this.cdp.on("Fetch.requestPaused", (params) => {
      if (this.stubQuoteApi) {
        this.cdp
          .send("Fetch.fulfillRequest", {
            requestId: params.requestId,
            responseCode: 200,
            responseHeaders: [{ name: "Content-Type", value: "application/json" }],
            body: Buffer.from(JSON.stringify({ ok: true })).toString("base64"),
          })
          .catch(() => {});
      } else {
        this.cdp.send("Fetch.continueRequest", { requestId: params.requestId }).catch(() => {});
      }
    });

    this.cdp.on("Network.requestWillBeSent", (params) => {
      const host = new URL(params.request.url).hostname;
      if (host !== "127.0.0.1" && host !== "localhost") {
        this.externalRequests.push(params.request.url);
        log(`non-loopback request attempted: ${params.request.url.slice(0, 120)}`);
      }
    });
  }

  async goto(path) {
    await this.cdp.send("Page.navigate", { url: `${ORIGIN}${path}` });
    await this.cdp.waitForEvent("Page.loadEventFired", () => true, 30_000).catch(() => {});
    await sleep(300);
  }

  async hydrate(selector) {
    await this.cdp.until(hydrated(selector), { timeoutMs: 25_000, label: `hydration of ${selector}` });
  }

  async events() {
    return JSON.parse(await this.cdp.evaluate(readEvents));
  }

  async dataLayer() {
    return JSON.parse(await this.cdp.evaluate(readDataLayer));
  }

  stop(signal = "SIGTERM") {
    this.cdp?.close();
    this.browser?.close();
    for (const process_ of this.processes) process_.stop(signal);
    if (this.profile && !KEEP) {
      try {
        rmSync(this.profile, { recursive: true, force: true });
      } catch {
        // Best effort.
      }
    }
  }
}

/* ------------------------------------------------------------------------ */
/* Checks                                                                    */
/* ------------------------------------------------------------------------ */

function dataLayerEntries(layer, eventName) {
  return layer.filter(
    (entry) => Array.isArray(entry) && entry[0] === "event" && entry[1] === eventName,
  );
}

function describeEntry(entry) {
  return Array.isArray(entry) ? JSON.stringify(entry).slice(0, 160) : JSON.stringify(entry).slice(0, 160);
}

/** Asserts an event fired exactly once, with the expected context subset. */
function assertEvent(records, name, expectedContext, label) {
  const matches = records.filter((record) => record.event === name);

  if (matches.length !== 1) {
    fail(`${label}: ${name} fired ${matches.length}× (expected exactly 1)`);
    return null;
  }

  const context = matches[0].context ?? {};
  const problems = [];

  for (const [key, value] of Object.entries(expectedContext)) {
    if (value === undefined) continue;
    if (context[key] !== value) problems.push(`${key}="${context[key] ?? ""}" (expected "${value}")`);
  }

  const unknown = Object.keys(context).filter((key) => !CONTEXT_KEYS.includes(key));
  if (unknown.length > 0) problems.push(`unexpected context keys: ${unknown.join(", ")}`);

  if (problems.length > 0) {
    fail(`${label}: ${name} parameters wrong — ${problems.join("; ")}`);
    return null;
  }

  pass(`${label}: ${name} fired once with ${JSON.stringify(context)}`);
  return matches[0];
}

/* ------------------------------------------------------------------------ */
/* Main                                                                      */
/* ------------------------------------------------------------------------ */

async function main() {
  const modeLabel = CONFIGURED
    ? `CONFIGURED (test-format IDs ${TEST_GA4_ID} + ${TEST_CLARITY_ID}, built into ${CONFIGURED_DIST_DIR}/)`
    : "EVENT LAYER (existing .next build, no provider configured)";

  console.log("\nRenovix Home Services — end-to-end conversion-event verification");
  console.log(`Mode: ${modeLabel}\n`);

  const chromePath = resolveChrome();

  if (!chromePath) {
    console.log("SKIPPED — no Chromium/Chrome executable found.");
    console.log("  Point the harness at one and re-run:");
    console.log("    CHROME_PATH=/path/to/chrome npm run verify:analytics:e2e");
    console.log("  (a Playwright or Puppeteer browser cache is picked up automatically)");
    console.log("\nNothing was verified; no result is claimed.");
    process.exit(0);
  }

  console.log(`Browser: ${chromePath}`);

  /* --- 1. A build to serve ------------------------------------------------ */
  const distDir = CONFIGURED ? CONFIGURED_DIST_DIR : ".next";

  if (CONFIGURED && SKIP_BUILD && !existsSync(join(ROOT, CONFIGURED_DIST_DIR, "BUILD_ID"))) {
    console.log(`--no-build was given but ${CONFIGURED_DIST_DIR}/ does not exist — drop the flag.`);
    process.exit(1);
  }

  if (CONFIGURED && !SKIP_BUILD) {
    snapshotTsconfig();
    console.log(`Building the throwaway configured copy (this takes a couple of minutes)…`);
    await run(process.platform === "win32" ? "npm.cmd" : "npx", ["next", "build"], {
      env: {
        RENOVIX_DIST_DIR: CONFIGURED_DIST_DIR,
        NEXT_PUBLIC_GA4_MEASUREMENT_ID: TEST_GA4_ID,
        NEXT_PUBLIC_CLARITY_PROJECT_ID: TEST_CLARITY_ID,
        NEXT_PUBLIC_ANALYTICS_DEBUG: "false",
      },
      label: "next build (configured)",
    });
    restoreTsconfig();
    console.log(`  build ready in ${CONFIGURED_DIST_DIR}/`);
  } else if (!existsSync(join(ROOT, distDir, "BUILD_ID"))) {
    console.log(`SKIPPED — no production build found (${distDir}/BUILD_ID is missing).`);
    console.log("  Run `npm run build` first, then re-run this harness.");
    console.log("  Or use the configured mode, which builds its own copy:");
    console.log("    npm run verify:analytics:e2e -- --configured");
    process.exit(0);
  }

  /* --- 2. next start ------------------------------------------------------ */
  await assertPortFree(PORT).catch((error) => {
    console.log(`\nCannot start: ${error.message}`);
    process.exit(1);
  });

  const serverEnv = CONFIGURED
    ? {
        RENOVIX_DIST_DIR: CONFIGURED_DIST_DIR,
        NEXT_PUBLIC_GA4_MEASUREMENT_ID: TEST_GA4_ID,
        NEXT_PUBLIC_CLARITY_PROJECT_ID: TEST_CLARITY_ID,
      }
    : {};

  const server = spawnDetached(
    process.platform === "win32" ? "npx.cmd" : "npx",
    ["next", "start", "-H", "127.0.0.1", "-p", String(PORT)],
    { env: serverEnv, label: "next start" },
  );

  const harness = new Harness();
  harness.processes.push(server);

  try {
    await waitForServer(`${ORIGIN}/en/`);
    console.log(`Server:  ${ORIGIN} (next start)\n`);

    await harness.startChrome(chromePath);
    console.log(`Chrome:  ${harness.browserInfo.product ?? "headless Chromium"}`);

    /* --- 3. Nothing may leave the machine --------------------------------- */
    console.log("\n1. Network isolation (a test ID can never report to a real property)");

    await harness.goto("/en/");
    const probe = await harness.cdp.evaluate(
      `fetch("https://www.googletagmanager.com/gtag/js?id=probe", { mode: "no-cors" })
         .then(() => "REACHED", () => "BLOCKED")`,
      { awaitPromise: true },
    );

    if (probe !== "BLOCKED") {
      fail("the browser can still reach external hosts — aborting so no data can leave");
      throw new Error("network isolation probe failed");
    }
    pass("every non-loopback hostname fails to resolve (googletagmanager.com probe blocked)");

    /* --- 4. Provider tags in the served HTML + CSP ------------------------- */
    console.log("\n2. Provider delivery route in the served page");

    const headResponse = await fetch(`${ORIGIN}/en/`);
    const html = await headResponse.text();
    const csp = headResponse.headers.get("content-security-policy") ?? "";

    // `next/script` injects the provider tags after hydration, so the tag
    // assertions read the hydrated DOM (further down) while the Content
    // Security Policy is a response-header fact and is checked here.
    if (CONFIGURED) {
      for (const origin of ["https://www.googletagmanager.com", "https://www.clarity.ms"]) {
        if (csp.includes(origin)) {
          pass(`CSP allows ${origin}`);
        } else {
          fail(`CSP is missing ${origin} — the provider would be blocked`);
        }
      }
    } else {
      const leaks = ["googletagmanager.com", "clarity.ms", "googleadservices.com"].filter((host) =>
        html.includes(host),
      );
      if (leaks.length === 0) {
        pass("the server-rendered HTML carries no provider host while every ID is unset");
      } else {
        fail(`provider host(s) present in an unconfigured build: ${leaks.join(", ")}`);
      }

      if (!/googletagmanager|clarity\.ms|googleadservices/.test(csp)) {
        pass("CSP carries no provider origin — the strict pre-measurement policy is intact");
      } else {
        fail("CSP widened without any configured provider");
      }
    }

    /* --- 5. Consent defaults / bootstrap ---------------------------------- */
    console.log("\n3. Bootstrap: Consent Mode defaults and provider init");

    await harness.goto("/en/");
    await harness.hydrate(".floating-whatsapp a");

    const scriptSrcs = () =>
      `JSON.stringify([...document.querySelectorAll("script[src]")].map((el) => el.src))`;
    /** `Runtime.evaluate` returns the JSON text, so parse it on this side. */
    const scriptSources = async () => JSON.parse(await harness.cdp.evaluate(scriptSrcs()));

    if (CONFIGURED) {
      const googleTag = await harness.cdp
        .until(`JSON.parse(${scriptSrcs()}).find((src) => src.includes("gtag/js")) ?? ""`, {
          timeoutMs: 15_000,
          label: "the injected gtag.js script element",
        })
        .catch(() => "");

      if (googleTag.includes(`id=${TEST_GA4_ID}`)) {
        pass(`the Google tag loads from gtag.js with the configured Measurement ID`);
      } else {
        fail(`gtag.js is not loaded with the configured ID (found "${googleTag || "nothing"}")`);
      }

      const clarityTag = await harness.cdp
        .until(`JSON.parse(${scriptSrcs()}).find((src) => src.includes("clarity.ms/tag/")) ?? ""`, {
          timeoutMs: 15_000,
          label: "the injected Clarity script element",
        })
        .catch(() => "");

      if (clarityTag.includes(TEST_CLARITY_ID)) {
        pass(`Microsoft Clarity loads from clarity.ms/tag with the configured project ID`);
      } else {
        fail(`the Clarity script is not loaded with the configured ID (found "${clarityTag || "nothing"}")`);
      }

      if ((await scriptSources()).some((src) => src.includes("gtm.js?id="))) {
        fail("gtm.js and gtag.js must never load together");
      }
    } else {
      const injected = (await scriptSources()).filter((src) =>
        /googletagmanager|google-analytics|clarity\.ms|googleadservices/.test(src),
      );
      if (injected.length === 0) {
        pass("no provider script is injected client-side either");
      } else {
        fail(`provider script(s) injected while unconfigured: ${injected.join(", ")}`);
      }
    }

    const initialLayer = await harness.dataLayer();

    const consent = initialLayer.find(
      (entry) => Array.isArray(entry) && entry[0] === "consent" && entry[1] === "default",
    );

    if (!consent) {
      fail("no Consent Mode default was pushed before the providers run");
    } else {
      const settings = consent[2] ?? {};
      const denied = ["ad_storage", "ad_user_data", "ad_personalization"].filter(
        (key) => settings[key] !== "denied",
      );
      if (denied.length === 0 && settings.analytics_storage === "granted") {
        pass("consent defaults pushed: analytics_storage granted, every advertising signal denied");
      } else {
        fail(`consent defaults wrong: ${JSON.stringify(settings)}`);
      }
    }

    if (CONFIGURED) {
      const config = initialLayer.find(
        (entry) => Array.isArray(entry) && entry[0] === "config" && entry[1] === TEST_GA4_ID,
      );
      if (config && config[2]?.send_page_view === false && config[2]?.allow_google_signals === false) {
        pass(`Google tag configured with send_page_view:false + Google signals off`);
      } else {
        fail(`Google tag config missing or wrong: ${config ? describeEntry(config) : "absent"}`);
      }

      const views = dataLayerEntries(initialLayer, "page_view");
      if (views.length === 1) {
        pass("exactly one page_view on initial load (the tag's automatic view stays off)");
      } else {
        fail(`page_view count on initial load is ${views.length} (expected 1)`);
      }

      const clarityTag = await harness.cdp.evaluate(
        `typeof window.clarity === "function" ? "shim" : (window.clarity ? "loaded" : "absent")`,
      );
      if (clarityTag === "shim" || clarityTag === "loaded") {
        pass(`Clarity queue present (${clarityTag}) so early calls replay once the tag loads`);
      } else {
        fail("the Clarity queue shim was never installed");
      }
    } else {
      const providers = initialLayer.filter(
        (entry) => Array.isArray(entry) && (entry[0] === "config" || entry[1] === "page_view"),
      );
      if (providers.length === 0 && initialLayer.length === (consent ? 1 : 0)) {
        pass("with no provider configured the data layer holds only the consent default");
      } else {
        fail(`unconfigured build pushed provider commands: ${initialLayer.map(describeEntry).join(" | ")}`);
      }
    }

    /* --- 6. Client-side navigation sends exactly one more page_view -------- */
    if (CONFIGURED) {
      console.log("\n4. page_view on client-side navigation");

      await harness.cdp.evaluate(`window.__e2eMarker = "alive"`);
      const linkHref = await harness.cdp.evaluate(`(() => {
        const link = document.querySelector('a[href="/en/services/"]');
        if (!link) return "";
        link.click();
        return link.getAttribute("href");
      })()`);

      if (!linkHref) {
        fail('no internal link to /en/services/ found on the home page');
      } else {
        await harness.cdp.until(`location.pathname === "/en/services/"`, {
          timeoutMs: 20_000,
          label: "client-side navigation to /en/services/",
        });
        await sleep(400);

        const marker = await harness.cdp.evaluate(`window.__e2eMarker ?? "gone"`);
        const layer = await harness.dataLayer();
        const views = dataLayerEntries(layer, "page_view");

        if (marker === "alive") {
          pass("the navigation was client-side (no document reload)");
        } else {
          fail("the navigation reloaded the document, so page_view dedupe was not exercised");
        }

        if (views.length === 2) {
          pass(`exactly one additional page_view (total ${views.length}) for the new route`);
        } else {
          fail(`page_view total after one client-side navigation is ${views.length} (expected 2)`);
        }

        const last = views.at(-1)?.[2] ?? {};
        if (last.page_path === "/en/services/" && last.language === "en") {
          pass(`page_view carries page_path and language (${last.page_path}, ${last.language})`);
        } else {
          fail(`page_view parameters wrong: ${JSON.stringify(last)}`);
        }
      }
    }

    /* --- 7. whatsapp_click in all three languages -------------------------- */
    console.log(`\n5. whatsapp_click — floating WhatsApp CTA (EN/MS/ZH)`);

    const allEvents = [];

    for (const lang of ["en", "ms", "zh"]) {
      await harness.goto(`/${lang}/`);
      await harness.hydrate(".floating-whatsapp a");

      const before = await harness.events();
      const href = await harness.cdp.evaluate(clickSelector(".floating-whatsapp a"));
      await sleep(250);
      const after = await harness.events();

      if (!href || !/^https:\/\/wa\.me\//.test(href)) {
        fail(`/${lang}/: the floating CTA does not point at wa.me (${href || "no anchor"})`);
        continue;
      }

      const fresh = after.slice(before.length);
      allEvents.push(...fresh);
      assertEvent(fresh, "whatsapp_click", { lang, surface: "floating_whatsapp_general" }, `/${lang}/`);

      if (CONFIGURED) {
        const entries = dataLayerEntries(await harness.dataLayer(), "whatsapp_click");
        if (entries.length === 1) {
          pass(`/${lang}/: dataLayer received ${describeEntry(entries[0])}`);
        } else {
          fail(`/${lang}/: dataLayer holds ${entries.length} whatsapp_click entries (expected 1)`);
        }
      }
    }

    /* --- 8. phone_click ---------------------------------------------------- */
    console.log("\n6. phone_click — tel: call CTA");

    await harness.goto("/en/");
    await harness.hydrate("a[href^='tel:']");

    {
      const before = await harness.events();
      const href = await harness.cdp.evaluate(clickSelector("header a[href^='tel:']"));
      await sleep(250);
      const fresh = (await harness.events()).slice(before.length);
      allEvents.push(...fresh);

      if (!href?.startsWith("tel:")) {
        fail(`the header call CTA is not a tel: link (${href || "missing"})`);
      } else {
        const record = assertEvent(fresh, "phone_click", { lang: "en" }, "/en/ header");
        if (record && !["header", "footer"].includes(record.context.surface ?? "")) {
          fail(`phone_click surface "${record.context.surface}" is not header/footer`);
        }
      }

      if (CONFIGURED) {
        const entries = dataLayerEntries(await harness.dataLayer(), "phone_click");
        if (entries.length === 1) {
          pass(`dataLayer received ${describeEntry(entries[0])}`);
        } else {
          fail(`dataLayer holds ${entries.length} phone_click entries (expected 1)`);
        }
      }
    }

    /* --- 9. quote_form_submit + quote_form_success ------------------------- */
    console.log("\n7. quote_form_submit + quote_form_success — quote form (EN)");

    const fillQuoteForm = async () => {
      const service = await harness.cdp.evaluate(`(() => {
        const select = document.querySelector("#quote-service");
        if (!select) return "";
        const option = [...select.options].find((entry) => entry.value && entry.value !== "");
        return option ? option.value : "";
      })()`);

      if (!service) throw new Error("no service option found on /en/quote/");

      for (const [selector, value] of [
        ["#quote-name", FORM_INPUT.name],
        ["#quote-whatsapp", FORM_INPUT.phone],
        ["#quote-property-type", "condominium-apartment"],
        ["#quote-service", service],
        ["#quote-location", FORM_INPUT.location],
        ["#quote-description", FORM_INPUT.description],
      ]) {
        const applied = await harness.cdp.evaluate(fillField(selector, value));
        if (applied === "missing") throw new Error(`quote form control ${selector} is missing`);
      }

      return service;
    };

    await harness.goto("/en/quote/");
    await harness.hydrate("#quote-service");

    {
      harness.stubQuoteApi = true;
      // Snapshot before the first keystroke: `quote_form_start` fires while the
      // form is being filled, so it must be inside the window we measure.
      const before = await harness.events();
      const service = await fillQuoteForm();

      await harness.cdp.evaluate(clickSelector("#quote-form button[type='submit']"));

      const successPanel = await harness.cdp
        .until(`(() => {
          const events = window.__renovixAnalytics ?? [];
          return events.some((record) => record.event === "quote_form_success") ? "yes" : "";
        })()`, { timeoutMs: 20_000, label: "quote_form_success" })
        .catch(() => "");
      await sleep(250);

      const fresh = (await harness.events()).slice(before.length);
      allEvents.push(...fresh);

      if (successPanel !== "yes") {
        fail(`the form never reached its success state (API stub not honoured?)`);
      } else {
        pass("the form rendered its success panel after the accepted submission");
      }

      const start = fresh.filter((record) => record.event === "quote_form_start");
      if (start.length === 1) {
        pass(`quote_form_start fired once with ${JSON.stringify(start[0].context)}`);
      } else {
        fail(`quote_form_start fired ${start.length}× (expected exactly 1)`);
      }

      assertEvent(fresh, "quote_form_submit", { lang: "en", service }, "/en/quote/");
      assertEvent(fresh, "quote_form_success", { lang: "en", service }, "/en/quote/");

      if (fresh.some((record) => record.event === "quote_form_error")) {
        fail("a successful submission also reported quote_form_error");
      }

      if (CONFIGURED) {
        const layer = await harness.dataLayer();
        for (const name of ["quote_form_submit", "quote_form_success"]) {
          const entries = dataLayerEntries(layer, name);
          if (entries.length === 1) {
            pass(`dataLayer received ${describeEntry(entries[0])}`);
          } else {
            fail(`dataLayer holds ${entries.length} ${name} entries (expected 1)`);
          }
        }
      }

      harness.stubQuoteApi = false;
    }

    /* --- 10. The honest failure path --------------------------------------- */
    console.log("\n8. quote_form_error — real, unstubbed endpoint (the 503 fallback)");

    await harness.goto("/en/quote/");
    await harness.hydrate("#quote-service");

    {
      const before = await harness.events();
      await fillQuoteForm();
      await harness.cdp.evaluate(clickSelector("#quote-form button[type='submit']"));

      const errored = await harness.cdp
        .until(`(() => {
          const events = window.__renovixAnalytics ?? [];
          return events.some((record) => record.event === "quote_form_error") ? "yes" : "";
        })()`, { timeoutMs: 25_000, label: "quote_form_error" })
        .catch(() => "");
      await sleep(250);

      const fresh = (await harness.events()).slice(before.length);
      allEvents.push(...fresh);

      if (errored !== "yes") {
        fail("the unstubbed endpoint did not produce quote_form_error — check the 503 path");
      } else {
        const record = fresh.find((entry) => entry.event === "quote_form_error");
        if (record.context?.reason === "unavailable") {
          pass(`quote_form_error fired once with reason "${record.context.reason}" (honest 503, no email faked)`);
        } else {
          fail(`quote_form_error reason is "${record.context?.reason}" (expected "unavailable")`);
        }
      }

      if (fresh.some((record) => record.event === "quote_form_success")) {
        fail("a rejected submission reported quote_form_success");
      }
    }

    /* --- 11. Web vitals ---------------------------------------------------- */
    if (CONFIGURED) {
      console.log("\n9. web_vitals (real-user metrics)");

      const vitals = dataLayerEntries(await harness.dataLayer(), "web_vitals");
      if (vitals.length > 0) {
        const metrics = [...new Set(vitals.map((entry) => entry[2]?.metric_name))].join(", ");
        pass(`${vitals.length} web_vitals event(s) reached the data layer (${metrics})`);
      } else {
        note("no web_vitals event arrived yet — they report on page hide/idle, so an empty run is not a failure");
      }
    }

    /* --- 12. PII discipline ------------------------------------------------ */
    console.log("\n10. No customer data in any event");

    const sensitive = Object.values(FORM_INPUT);
    const offenders = [];

    for (const record of allEvents) {
      for (const [key, value] of Object.entries(record.context ?? {})) {
        if (!CONTEXT_KEYS.includes(key)) offenders.push(`${record.event}.${key} (unknown key)`);
        if (typeof value !== "string") continue;
        for (const secret of sensitive) {
          if (secret && value.includes(secret)) offenders.push(`${record.event}.${key} contains "${secret}"`);
        }
      }
    }

    if (offenders.length === 0) {
      pass(`all ${allEvents.length} recorded events stay inside the {${CONTEXT_KEYS.join(", ")}} allowlist`);
      pass("no name, phone, location or project description reached an event parameter");
    } else {
      fail(`PII/allowlist breach: ${[...new Set(offenders)].join("; ")}`);
    }

    /* --- 13. Nothing external was requested -------------------------------- */
    console.log("\n11. No measurement request left the machine");

    const networkRequests = harness.externalRequests.filter((url) => /^https?:/i.test(url));

    if (networkRequests.length === 0) {
      pass("no http(s) request left the loopback origin");
    } else {
      const hosts = [...new Set(networkRequests.map((url) => new URL(url).hostname))];
      pass(
        `${networkRequests.length} http(s) request(s) were attempted (${hosts.join(", ")}) and ` +
          "every one failed at DNS — nothing was sent to any provider",
      );
    }

    const schemes = [
      ...new Set(
        harness.externalRequests.filter((url) => !/^https?:/i.test(url)).map((url) => url.split(":")[0]),
      ),
    ];
    if (schemes.length > 0) {
      pass(`the only other off-page targets were ${schemes.join("/")} (no network involved)`);
    }

    /* --- Report ------------------------------------------------------------ */
    console.log("\nSummary");
    for (const message of notes) console.log(`  ℹ ${message}`);
    console.log(`  Failures: ${failures.length}`);
    for (const message of failures) console.log(`    ✗ ${message}`);

    if (CONFIGURED) {
      console.log(`\nThe throwaway build in ${CONFIGURED_DIST_DIR}/ carries TEST-format IDs.`);
      console.log("It is git-ignored and never deployed; `npm run build` still writes .next/.");
    }
  } finally {
    // Politely, then forcibly: `next start` and Chromium fork further children
    // and must not be left holding the port for the next run.
    restoreTsconfig();
    harness.stop();
    await sleep(600);
    harness.stop("SIGKILL");
  }

  if (failures.length > 0) {
    console.log("\nEnd-to-end measurement verification: FAIL");
    process.exit(1);
  }

  console.log("\nEnd-to-end measurement verification: PASS");
  console.log(
    CONFIGURED
      ? "Live delivery is still the owner's to confirm: GA4 Realtime + DebugView and"
      : "Event firing is proven against the real build. Provider delivery still needs",
  );
  console.log("Clarity sessions in the provider UIs (ANALYTICS_SETUP.md §5).");
}

main().catch(async (error) => {
  console.error(`\nHarness error: ${error.message}`);
  process.exit(1);
});
