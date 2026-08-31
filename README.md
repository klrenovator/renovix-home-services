# renovix-home-services

Renovix Home Services – Home Renovation & Improvement Services in Kuala Lumpur & Selangor

## Technical foundation

| Package | Installed version |
| --- | --- |
| Next.js | 16.3.3 |
| React / React DOM | 19.2.8 |
| TypeScript | 6.0.3 |
| Tailwind CSS | 4.3.3 |
| @tailwindcss/postcss | 4.3.3 |
| PostCSS | 8.5.26 |
| ESLint | 9.39.5 |
| eslint-config-next | 16.3.3 |
| @types/node | 26.4.0 |
| @types/react | 19.2.18 |
| @types/react-dom | 19.2.5 |

## Requirements

- Node.js >= 20.9.0 (Next.js 16 requirement)
- npm

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Generate Next.js route types, then TypeScript check (`next typegen && tsc --noEmit`) |

## Version notes

- Tailwind CSS v4 uses the `@tailwindcss/postcss` plugin. `autoprefixer` is not installed — Tailwind v4 handles vendor prefixing internally.
- ESLint is on the 9.x line because the plugins bundled with `eslint-config-next@16.3.3` (`eslint-plugin-react`, `eslint-plugin-jsx-a11y`, `eslint-plugin-import`) do not yet support ESLint 10.
- TypeScript is pinned to 6.0.3: the `typescript-eslint` toolchain used by `eslint-config-next` declares a peer range of `<6.1.0`, so TypeScript 7.0.x (npm `latest`) is not yet compatible with the official Next.js lint setup.
- `@types/node` 26.4.0 matches the TypeScript 6.0 series (`ts6.0` dist-tag).
