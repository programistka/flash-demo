import ThemeToggle from '../components/ThemeToggle'

export default function Home() {
  return (
    <div className="container">
      <div className="badge">✅ next-themes — without flash</div>
      <h1>Dark mode with next-themes</h1>
      <p className="subtitle">
        Switch to dark theme, then refresh the page (Ctrl+R). You will not see any flash.
      </p>

      <ThemeToggle />

      <div className="card">
        <h2>Why doesn't it flicker?</h2>
        <p>
          <code>ThemeProvider</code> injects an inline script into{' '}
          <code>&lt;head&gt;</code> that sets the theme <strong>before</strong>{' '}
          anything is rendered on screen. The server does not need to know the
          preference — the script reads it from <code>localStorage</code> before
          anything appears.
        </p>
      </div>

      <div className="card">
        <h2>How to test</h2>
        <p>
          1. Click the button above to enable dark theme.<br />
          2. Refresh the page (Ctrl+R or F5).<br />
          3. No flash — the page renders immediately in dark theme.
        </p>
      </div>

      <div className="card">
        <h2>Compare with the localStorage version</h2>
        <p>
          Run the <code>with-localstorage</code> project on port 3000 in parallel
          to see the difference. Most visible after{' '}
          <code>pnpm build && pnpm start</code>.
        </p>
      </div>
    </div>
  )
}
