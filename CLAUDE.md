# process-management-web — CLAUDE.md

## Project overview

React 19 SPA for process management. Stack: Vite + TypeScript 6 + Tailwind CSS v4 + shadcn/ui (Radix Nova) + TanStack Router (file-based) + Motion.

## Commands

```bash
pnpm dev          # dev server — also auto-generates routeTree.gen.ts
pnpm build        # vite build (generates route tree) → tsc -b
pnpm lint         # eslint
pnpm preview      # serve dist/
pnpm dlx shadcn@latest add <component>   # install shadcn component
```

> **Build order**: `vite build` runs first because `@tanstack/router-plugin` generates
> `src/routeTree.gen.ts` at build time. TypeScript only sees it after that file exists.

## Architecture

```
src/
├── app/
│   └── providers/        # Global React providers (rendered by __root.tsx)
├── assets/               # Static files (images, svgs)
├── components/
│   ├── ui/               # shadcn auto-generated — DO NOT hand-edit
│   └── shared/           # App-wide presentational components
├── features/             # Feature slices (co-locate components/hooks/services)
│   └── [feature]/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       └── types.ts
├── hooks/                # Cross-feature custom hooks
├── lib/
│   ├── utils.ts          # cn() — tailwind-merge + clsx
│   └── motion.ts         # Reusable Motion animation variants
├── routes/               # TanStack Router file-based routes
│   ├── __root.tsx        # Root layout (renders <Providers> + <Outlet>)
│   └── index.tsx         # "/" route
├── services/             # API layer (fetch wrappers, clients)
├── styles/
│   └── globals.css       # Single CSS entry — Tailwind v4 + shadcn vars
├── types/                # Shared TypeScript types
├── routeTree.gen.ts      # AUTO-GENERATED — never edit by hand
└── main.tsx              # createRouter + RouterProvider
```

### Key rules

- **shadcn components** live in `src/components/ui/`. Never hand-edit them — re-run `pnpm dlx shadcn@latest add` to regenerate.
- **Feature isolation**: everything belonging to one feature goes inside `src/features/[feature]/`. Only export via the feature's `index.ts` barrel.
- **No barrel files** outside features (avoids bundle bloat).
- **Path alias**: use `@/` for all imports from `src/`. Example: `import { cn } from '@/lib/utils'`.
- **`routeTree.gen.ts` is committed** — required for `tsc` to succeed in CI without a prior `vite build`.

## Routing (TanStack Router)

File-based routing via `@tanstack/router-plugin/vite`. The plugin must appear **before** `react()` in `vite.config.ts`.

### File naming conventions

| File | Route |
|---|---|
| `routes/index.tsx` | `/` |
| `routes/about.tsx` | `/about` |
| `routes/posts/$postId.tsx` | `/posts/:postId` |
| `routes/dashboard/_layout.tsx` | Layout wrapper for `/dashboard/*` |
| `routes/__root.tsx` | Root layout (always rendered) |

### Creating a route

```tsx
// src/routes/processes/index.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/processes/')({
  component: ProcessesPage,
})

function ProcessesPage() {
  return <div>Processes</div>
}
```

### Navigation

```tsx
import { Link, useNavigate } from '@tanstack/react-router'

// Declarative (fully type-safe)
<Link to="/processes/$id" params={{ id: '123' }}>Open</Link>

// Imperative
const navigate = useNavigate()
navigate({ to: '/processes/$id', params: { id: '123' } })
```

### Route params & search params

```tsx
export const Route = createFileRoute('/processes/$id')({
  component: ProcessDetail,
})

function ProcessDetail() {
  const { id } = Route.useParams()          // path param
  const search = Route.useSearch()          // search params (type-safe)
  return <div>{id}</div>
}
```

### Loaders (data fetching before render)

```tsx
export const Route = createFileRoute('/processes/')({
  loader: () => fetchProcesses(),           // runs before component renders
  component: ProcessesPage,
})

function ProcessesPage() {
  const data = Route.useLoaderData()
  return <ul>{data.map(p => <li key={p.id}>{p.name}</li>)}</ul>
}
```

### Router registration (already done in main.tsx)

```tsx
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router   // enables full type inference everywhere
  }
}
```

## Design system

### Color tokens

The CSS uses **shadcn CSS variables** (`--primary`, `--background`, etc.) mapped to Tailwind classes via `@theme inline` in `globals.css`. Brand identity is purple.

| Token class | Meaning |
|---|---|
| `bg-background` / `text-foreground` | Page background/text |
| `bg-primary` / `text-primary-foreground` | Brand purple |
| `bg-muted` / `text-muted-foreground` | Subtle backgrounds/secondary text |
| `bg-card` | Card surfaces |
| `border-border` | Default border |
| `text-destructive` | Error/danger |
| `text-success/warning/info/danger` | Semantic utility colors |

### Dark mode

Controlled by `.dark` CSS class on `<html>` (shadcn convention). Add a theme toggle that sets/removes this class. **Not** `prefers-color-scheme` media query.

### Typography

Geist Variable font via `@fontsource-variable/geist`. Use `font-sans` (body) and `font-mono` (code) Tailwind utilities.

## Motion

Import variants from `@/lib/motion` and compose with `motion/react`:

```tsx
import { motion } from 'motion/react'
import { fadeUp, staggerContainer } from '@/lib/motion'

<motion.ul variants={staggerContainer} initial="hidden" animate="visible">
  <motion.li variants={fadeUp}>Item</motion.li>
</motion.ul>
```

Available presets: `fadeIn`, `fadeUp`, `fadeDown`, `scaleIn`, `staggerContainer`, `slideInLeft`, `slideInRight`.

## Performance guidelines

- **Isolate fast-changing state** (timers, scroll) into leaf components so heavy lists don't re-render.
- **Memoize only when props are stable** — wrap leaf rows with `memo`, stabilize handlers with `useCallback`.
- **No inline objects/arrays as props** — new references every render bust memoization.
- **`autoCodeSplitting: true`** is already set in the router plugin — each route chunk is split automatically.
- **Import shadcn components directly** — never re-export them from a barrel file.

## shadcn

- Style: `radix-nova`
- Icon library: `lucide-react`
- CSS file: `src/styles/globals.css`
- Utils alias: `@/lib/utils`

To add a component: `pnpm dlx shadcn@latest add button` → lands in `src/components/ui/button.tsx`.
