import { useEffect, useState } from 'react'

import { ThemeContext, type Theme } from '@/contexts/ThemeContext'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'system')
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement

    // Remove existing theme classes
    root.classList.remove('light', 'dark')

    let effectiveTheme: 'light' | 'dark'

    if (theme === 'system') {
      effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    } else {
      effectiveTheme = theme
    }

    // Apply the effective theme
    root.classList.add(effectiveTheme)
    root.setAttribute('data-theme', effectiveTheme)
    setIsDark(effectiveTheme === 'dark')

    console.log('Theme applied:', effectiveTheme)
    console.log('HTML classes:', root.classList.toString())
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme === 'system') {
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')
        const systemTheme = mediaQuery.matches ? 'dark' : 'light'
        root.classList.add(systemTheme)
        root.setAttribute('data-theme', systemTheme)
        setIsDark(systemTheme === 'dark')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}
