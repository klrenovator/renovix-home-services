#!/usr/bin/env node
/**
 * Lead-generation Task 3.4 — Project Area Tagging verification.
 *
 *   npm run verify:project-locations
 *
 * Inspects all 28 published projects in `data/project-content/projects.ts`
 * to check whether confirmed neighborhood/township locations are mapped,
 * validates that any tagged locations match valid published area guides in
 * Kuala Lumpur and Selangor, and reports which projects remain pending owner
 * confirmation.
 *
 * In accordance with CONTENT_GOVERNANCE.md §1, no project locations may ever
 * be invented, guessed from photos, or filled with placeholders.
 *
 * This script is non-destructive and informational:
 * - Offline check: contacts no external service.
 * - Exits 0 when all configured locations are valid (pending state is honest).
 * - Exits 1 only if an unknown region or invalid area slug is configured.
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const read = (path) => readFileSync(join(ROOT, path), "utf8");

const PROJECTS_SOURCE = read("data/project-content/projects.ts");
const LOCATIONS_SOURCE = read("data/locations/registry.ts");

/* ------------------------------------------------------------------------ */
/* 1. Parse published area guides from data/locations/registry.ts            */
/* ------------------------------------------------------------------------ */

const validGuides = new Map(); // id ("kuala-lumpur/mont-kiara") -> name ("Mont Kiara")
const guideChunks = LOCATIONS_SOURCE.split(/\n\s*\{\n/).slice(1);
for (const chunk of guideChunks) {
  const idMatch = chunk.match(/id:\s*"((?:kuala-lumpur|selangor)\/[a-z0-9-]+)"/);
  const nameMatch = chunk.match(/name:\s*"([^"]+)"/);
  const isPublished = chunk.includes("published: true");
  if (idMatch && nameMatch && isPublished) {
    validGuides.set(idMatch[1], nameMatch[1]);
  }
}

/* ------------------------------------------------------------------------ */
/* 2. Parse projects from data/project-content/projects.ts                   */
/* ------------------------------------------------------------------------ */

function splitTopLevelEntries(source) {
  return source
    .split(/^\s*(?=\{)/m)
    .slice(1)
    .map((chunk) => chunk.split("\n").slice(0, -1).join("\n"));
}

const entries = splitTopLevelEntries(PROJECTS_SOURCE);
const failures = [];
const tagged = [];
const pending = [];

for (const chunk of entries) {
  const slug = chunk.match(/^\s*slug:\s*"([^"]+)"/m)?.[1];
  const category = chunk.match(/^\s*category:\s*"([^"]+)"/m)?.[1];
  const status = chunk.match(/^\s*status:\s*"([^"]+)"/m)?.[1];

  if (!slug || status !== "published") continue;

  const locationMatch = chunk.match(/location:\s*\{\s*region:\s*"([^"]+)"(?:,\s*area:\s*"([^"]+)")?\s*\}/s);

  if (!locationMatch) {
    pending.push({ slug, category });
    continue;
  }

  const [, region, area] = locationMatch;

  if (!["kuala-lumpur", "selangor"].includes(region)) {
    failures.push(`Project "${slug}" has invalid region "${region}" (must be "kuala-lumpur" or "selangor").`);
    continue;
  }

  if (area) {
    const guideId = `${region}/${area}`;
    if (!validGuides.has(guideId)) {
      failures.push(`Project "${slug}" references unknown area guide "${guideId}".`);
      continue;
    }
    const areaName = validGuides.get(guideId);
    tagged.push({
      slug,
      category,
      region,
      area,
      locationLabel: `${areaName}, ${region === "kuala-lumpur" ? "Kuala Lumpur" : "Selangor"}`,
    });
  } else {
    tagged.push({
      slug,
      category,
      region,
      locationLabel: region === "kuala-lumpur" ? "Kuala Lumpur (Region-wide)" : "Selangor (Region-wide)",
    });
  }
}

/* ------------------------------------------------------------------------ */
/* 3. Report findings                                                        */
/* ------------------------------------------------------------------------ */

console.log("Renovix Home Services — Project Area Tagging Verification");
console.log("(Lead-generation Task 3.4 / E-E-A-T Proof & Local CRO)");
console.log("");

console.log(`Total published projects: ${tagged.length + pending.length}`);
console.log(`Tagged with confirmed location: ${tagged.length}`);
console.log(`Pending owner location confirmation: ${pending.length}`);
console.log("");

if (tagged.length > 0) {
  console.log("TAGGED PROJECTS (renders location chip + area page proof):");
  for (const item of tagged) {
    console.log(`  ✓ ${item.slug} (${item.category}) → ${item.locationLabel}`);
  }
  console.log("");
}

if (pending.length > 0) {
  console.log("PENDING OWNER CONFIRMATION (cleanly omitted from area proof — no fake locations):");
  for (const item of pending) {
    console.log(`  [PENDING] ${item.slug} (${item.category})`);
  }
  console.log("");
}

console.log("GOVERNANCE & HONESTY GATE:");
console.log("  - Project locations MUST come from owner client records; NEVER guess from photos.");
console.log("  - Projects with confirmed locations automatically display location chips, link to the");
console.log("    corresponding area guide, and display as local proof on that area's guide page.");
console.log("  - Projects without confirmed locations cleanly omit the area section (no empty state).");
console.log("  - See PROJECT_LOCATIONS_SETUP.md for the step-by-step owner tagging runbook.");

if (failures.length > 0) {
  console.error("\nFAILURES ENCOUNTERED:");
  for (const failure of failures) {
    console.error(`  ✗ ${failure}`);
  }
  process.exit(1);
}

console.log("\nPASS — Project location configuration is sound and follows non-fabrication rules.");
