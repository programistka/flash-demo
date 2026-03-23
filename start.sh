#!/bin/bash
# Start both Next.js apps simultaneously
# Usage: ./start.sh         — just serve (requires prior build)
#        ./start.sh --build — build first, then serve

cd "$(dirname "$0")"

if [[ "$1" == "--build" ]]; then
  echo "Building with-localstorage..."
  (cd with-localstorage && pnpm build) || { echo "Build failed"; exit 1; }

  echo "Building with-next-themes..."
  (cd with-next-themes && pnpm build) || { echo "Build failed"; exit 1; }

  echo ""
fi

if [[ ! -d "with-localstorage/out" || ! -d "with-next-themes/out" ]]; then
  echo "Error: build output not found. Run: ./start.sh --build"
  exit 1
fi

echo "Starting with-localstorage on :3000..."
(cd with-localstorage && npx serve@latest out -p 3000 -s) &
PID1=$!

echo "Starting with-next-themes on :3001..."
(cd with-next-themes && npx serve@latest out -p 3001 -s) &
PID2=$!

echo ""
echo "Both apps running:"
echo "  http://localhost:3000  (localStorage — flash)"
echo "  http://localhost:3001  (next-themes  — no flash)"
echo ""
echo "Press Ctrl+C to stop both."

trap "kill $PID1 $PID2 2>/dev/null" EXIT
wait $PID1 $PID2