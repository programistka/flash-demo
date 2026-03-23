import './globals.css'

export const metadata = {
  title: '❌ Dark mode with localStorage (with flash)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
