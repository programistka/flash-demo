'use client'

import { useTheme } from './useTheme'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? '☀️ Light theme' : '🌙 Dark theme'}
    </button>
  )
}
