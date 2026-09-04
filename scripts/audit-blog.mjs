/**
 * Blog audit.
 *
 * The article registry points at services, sub-services, problems, projects,
 * locations and pricing rows by slug. Those references are only rendered when
 * they resolve, so a typo would silently drop a link instead of breaking the
 * build. This audit fails loudly instead, and also checks that every article
 * is reachable from the hub index and that its copy is complete in all three
 * languages.
 */
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (p) => readFileSync(path.join(root, p), "utf8");
const errors = [];
const fail = (msg) => errors.push(msg);

const blogDir = "data/blog/content";
const files = readdirSync(path.join(root, blogDir)).filter((f) => f.endsWith(".ts"));

const registry = read("data/blog/index.ts");

// --- Reference catalogues -------------------------------------------------
const serviceSlugs = new Set(
  [...read("data/services.ts").matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]),
);
const subServiceSlugs = new Set();
for (const f of readdirSync(path.join(root, "data/sub-services/content"))) {
  for (const m of read(`data/sub-services/content/${f}`).matchAll(/^\s{4}slug:\s*"([a-z0-9-]+)"/gm)) {
    subServiceSlugs.add(m[1]);
  }
}
const problemSlugs = new Set();
for (const f of readdirSync(path.join(root, "data/problem-content"))) {
  if (!f.endsWith(".ts")) continue;
  for (const m of read(`data/problem-content/${f}`).matchAll(/slug:\s*"([a-z0-9-]+)"/g)) {
    problemSlugs.add(m[1]);
  }
}
const projectSlugs = new Set(
  [...read("data/project-content/projects.ts").matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map(
    (m) => m[1],
  ),
);
const locationKeys = new Set(
  [...read("data/locations/registry.ts").matchAll(
    /id:\s*"((?:kuala-lumpur|selangor)\/[a-z0-9-]+)"/g,
  )].map((m) => m[1]),
);
const pricingIds = new Set(
  [...read("data/pricing/pricing.ts").matchAll(/id:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]),
);

// --- Per-article checks ---------------------------------------------------
const slugs = [];
const metaDescriptions = new Map();
const h1s = new Map();
const faqKeys = new Map();

for (const file of files) {
  const src = read(`${blogDir}/${file}`);
  const slugMatch = src.match(/^\s{2}slug:\s*"([a-z0-9-]+)"/m);
  if (!slugMatch) {
    fail(`${file}: no slug found`);
    continue;
  }
  const slug = slugMatch[1];
  slugs.push(slug);

  const listOf = (key) => {
    const m = src.match(new RegExp(`${key}:\\s*\\[([^\\]]*)\\]`));
    if (!m) return null;
    return [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]);
  };

  const checks = [
    ["relatedServices", serviceSlugs],
    ["relatedSubServices", subServiceSlugs],
    ["relatedProblems", problemSlugs],
    ["relatedProjects", projectSlugs],
    ["relatedLocations", locationKeys],
    ["pricingIds", pricingIds],
  ];
  for (const [key, catalogue] of checks) {
    const values = listOf(key);
    if (values === null) {
      fail(`${slug}: missing "${key}"`);
      continue;
    }
    for (const value of values) {
      if (!catalogue.has(value)) {
        fail(`${slug}: ${key} references unknown "${value}"`);
      }
    }
  }

  // Inline pricing blocks may only cite catalogue rows.
  for (const m of src.matchAll(/pricingIds:\s*\[([^\]]*)\]/g)) {
    for (const id of [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1])) {
      if (!pricingIds.has(id)) fail(`${slug}: pricing block references unknown row "${id}"`);
    }
  }

  // No hand-written ringgit figures anywhere in an article.
  for (const m of src.matchAll(/RM\s?\d/g)) {
    fail(`${slug}: hard-coded price "${m[0]}" — prices must come from pricing.ts`);
  }

  // All three languages present and complete.
  for (const lang of ["en", "ms", "zh"]) {
    if (!new RegExp(`^\\s{2}${lang}:\\s*\\{`, "m").test(src)) {
      fail(`${slug}: missing "${lang}" copy`);
    }
  }

  // Unique metaDescription / h1 / FAQ pairs per language.
  const perLang = src.split(/^\s{2}(en|ms|zh):\s*\{$/m);
  for (let i = 1; i < perLang.length; i += 2) {
    const lang = perLang[i];
    const body = perLang[i + 1];
    for (const [key, store] of [["metaDescription", metaDescriptions], ["h1", h1s]]) {
      const m = body.match(new RegExp(`${key}:\\s*\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`));
      if (!m) {
        fail(`${slug} [${lang}]: missing ${key}`);
        continue;
      }
      const dedupe = `${lang}:${m[1]}`;
      if (store.has(dedupe)) fail(`${slug} [${lang}]: duplicate ${key} (also ${store.get(dedupe)})`);
      else store.set(dedupe, slug);
    }
    for (const q of body.matchAll(/question:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g)) {
      const dedupe = `${lang}:${q[1]}`;
      if (faqKeys.has(dedupe)) {
        fail(`${slug} [${lang}]: FAQ question duplicated from ${faqKeys.get(dedupe)}: "${q[1]}"`);
      } else {
        faqKeys.set(dedupe, slug);
      }
    }
  }

  if (!registry.includes(file.replace(/\.ts$/, ""))) {
    fail(`${slug}: article file is not imported by data/blog/index.ts`);
  }
}

// --- Hub wiring: no orphan articles --------------------------------------
const registryEntries = [
  ...registry.matchAll(/^import\s*\{\s*([A-Za-z0-9]+)\s*\}\s*from\s*"\.\/content\//gm),
].map((m) => m[1]);
if (registryEntries.length !== files.length) {
  fail(
    `registry lists ${registryEntries.length} articles but ${files.length} article files exist`,
  );
}
const indexPage = read("components/blog/BlogIndexPage.tsx");
if (!indexPage.includes("getArticles()")) {
  fail("components/blog/BlogIndexPage.tsx must list every article via getArticles()");
}
const sitemap = read("app/sitemap.ts");
if (!sitemap.includes("getArticles()") || !sitemap.includes("/blog/")) {
  fail("app/sitemap.ts must emit the hub and every article");
}

// --- Report ---------------------------------------------------------------
if (errors.length > 0) {
  console.error(`✗ blog audit failed (${errors.length} issue${errors.length === 1 ? "" : "s"})`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(
  `✓ blog audit passed — ${files.length} articles, all references resolve, no orphans, EN/MS/ZH complete`,
);
