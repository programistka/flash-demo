# Dark mode flash demo 🎨

Two Next.js projects for comparison — one with manual `localStorage` (with flash), the other with `next-themes` (without flash).

## How to run

### 1. localStorage version (port 3000) — WITH FLASH

```bash
cd with-localstorage
pnpm install
pnpm build
pnpm start
```

Open http://localhost:3000

### 2. next-themes version (port 3001) — WITHOUT FLASH

```bash
cd with-next-themes
pnpm install
pnpm build
pnpm start
```

Open http://localhost:3001

## How to see the flash

1. Open both pages side by side
2. On both, click "🌙 Dark theme"
3. Refresh both pages (Ctrl+R)
4. On port 3000 you will see a brief white background flash — that is the flash
5. On port 3001 the page will immediately load in dark theme

## Important

The flash is **most visible in a production build** (`pnpm build && pnpm start`). In `pnpm dev` mode Next.js behaves slightly differently and the flash may be less noticeable.

To make the flash even more visible, you can throttle the network in DevTools (Network tab → Throttling → Slow 3G).
