import { ThemeProvider } from 'next-themes'
import './globals.css'

export const metadata = {
  title: '✅ Dark mode with next-themes (without flash)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
