# Dark mode flash demo 🎨

Two Next.js projects for comparison — one with manual `localStorage` (with flash), the other with `next-themes` (without flash).

## Live demos

| Version | URL |
|---|---|
| localStorage — WITH FLASH | https://programistka.github.io/flash-demo/with-localstorage/ |
| next-themes — WITHOUT FLASH | https://programistka.github.io/flash-demo/with-next-themes/ |

## How to run locally

### Quick start (both apps at once)

```bash
# First time — install dependencies in each project
cd with-localstorage && pnpm install && cd ..
cd with-next-themes && pnpm install && cd ..

# Build and start both
./start.sh --build

# Or just start if already built
./start.sh
```

- http://localhost:3000 — localStorage (flash)
- http://localhost:3001 — next-themes (no flash)

### Manual start

```bash
# localStorage version (port 3000)
cd with-localstorage
pnpm install && pnpm build && pnpm start

# next-themes version (port 3001)
cd with-next-themes
pnpm install && pnpm build && pnpm start
```

## How to see the flash

1. Open both pages side by side
2. Enable dark theme on both:
   - On port 3000: click "🌙 Dark theme"
   - On port 3001: click "🌙 Dark theme" (or skip — it respects your OS dark mode automatically)
3. Refresh both pages (Ctrl+R)
4. On port 3000 you will see a brief white background flash — that is the flash
5. On port 3001 the page will immediately load in dark theme

## Important

The flash is **most visible in a production build** (`pnpm build && pnpm start`). In `pnpm dev` mode Next.js behaves slightly differently and the flash may be less noticeable.

To make the flash even more visible, you can throttle the network in DevTools (Network tab → Throttling → Slow 3G).
