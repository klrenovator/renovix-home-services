import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    // Throwaway build produced by `npm run verify:analytics:e2e -- --configured`.
    ".next-analytics-e2e/**",
    // Any other throwaway build directory (RENOVIX_DIST_DIR) — generated
    // bundles are not source and must never break `npm run lint`.
    ".next-*/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
