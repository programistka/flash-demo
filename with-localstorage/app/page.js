import ThemeToggle from '../components/ThemeToggle'

export default function Home() {
  return (
    <div className="container">
      <div className="badge">❌ localStorage — with flash</div>
      <h1>Dark mode with manual localStorage</h1>
      <p className="subtitle">
        Switch to dark theme, then refresh the page (Ctrl+R). You will see the flash.
      </p>

      <ThemeToggle />

      <div className="card">
        <h2>Why does it flicker?</h2>
        <p>
          The server has no access to <code>localStorage</code>, so it renders
          the default light theme. Only after the JS loads in the browser
          is the theme applied — hence the visible flash.
        </p>
      </div>

      <div className="card">
        <h2>How to reproduce the flash</h2>
        <p>
          1. Click the button above to enable dark theme.<br />
          2. Refresh the page (Ctrl+R or F5).<br />
          3. You will see a brief flash of light background before dark theme loads.
        </p>
      </div>

      <div className="card">
        <h2>Most visible in a production build</h2>
        <p>
          Run <code>pnpm build && pnpm start</code> — in dev mode Next.js
          may behave slightly differently. The flash is most visible in production.
        </p>
      </div>
    </div>
  )
}
