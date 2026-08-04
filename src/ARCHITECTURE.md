# Source architecture

- `app/` — application shell, runtime configuration, route definitions, layouts, and providers.
- `assets/` — locally managed visual resources, grouped by backgrounds, fonts, icons, images, illustrations, and logos.
- `components/` — reusable presentational building blocks: generic common/UI components, layout primitives, page sections, and isolated animation/effect primitives.
- `data/` — typed, local content sources used before or alongside a CMS or API.
- `hooks/` — reusable React hooks with no page-specific ownership.
- `lib/` — framework integrations and shared configuration for motion, icons, and fonts.
- `pages/` — route-level page modules only; intentionally empty during this foundation phase.
- `services/` — boundary layer for content and gallery data retrieval.
- `styles/` — global styling entry point, Tailwind import, design tokens, and shared motion CSS.
- `types/` — cross-feature TypeScript domain and transport contracts.
- `utils/` — side-effect-free utility functions.

## Application folders

- `app/config/` — environment and application configuration contracts.
- `app/layouts/` — page-level layout composition points.
- `app/providers/` — global React context and integration provider composition.
- `app/routes/` — route configuration and route guards when required.

## Asset folders

- `assets/backgrounds/` — decorative and ambient backgrounds.
- `assets/fonts/` — self-hosted font files, if adopted.
- `assets/icons/` — custom brand icons that are not provided by Lucide.
- `assets/images/` — optimized raster and editorial photography.
- `assets/illustrations/` — custom mission and campaign illustrations.
- `assets/logos/` — InAmigos logos and partner marks.

## Component folders

- `components/common/` — composable, domain-neutral shared components.
- `components/layout/` — structural primitives for page composition.
- `components/sections/` — reusable full-width landing-page sections.
- `components/ui/` — low-level design-system controls.
- `components/animations/` — Framer Motion composition primitives.
- `components/effects/` — decorative visual effects kept separate from content components.

## Data, service, type, and style folders

- `data/content/` — structured editorial content snapshots.
- `data/mock/` — development-only fixtures.
- `services/api/` — API endpoint modules and request adapters.
- `services/clients/` — configured network clients.
- `types/api/` — API request and response contracts.
- `types/models/` — reusable domain model contracts.
- `styles/globals.css` — global style import boundary.
- `styles/variables.css` — semantic design tokens.
- `styles/tailwind.css` — Tailwind CSS integration boundary.
- `styles/animations.css` — shared CSS animation definitions.
