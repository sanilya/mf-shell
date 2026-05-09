import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import type { PropsWithChildren } from 'react'
import { darkTheme, lightTheme } from '../../theme/muiTheme'

type ThemeContextValue = {
  mode: 'light' | 'dark'
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue>({
  mode: 'light',
  toggleTheme: () => {}
})

export default function ThemeProvider ({ children }: Readonly<PropsWithChildren>) {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const storedMode = globalThis?.localStorage?.getItem('mf-shell-theme')
    const initialMode = storedMode === 'dark' ? 'dark' : 'light'
    setMode(initialMode)
    document.documentElement.classList.toggle('dark', initialMode === 'dark')
  }, [])

  const toggleTheme = useCallback(() => {
    setMode(prev => {
      const next = prev === 'light' ? 'dark' : 'light'
      document.documentElement.classList.toggle('dark', next === 'dark')
      globalThis?.localStorage?.setItem('mf-shell-theme', next)
      return next
    })
  }, [])

  const theme = useMemo(() => {
    return mode === 'light' ? lightTheme : darkTheme
  }, [mode])

  const contextValue = useMemo(() => ({ mode, toggleTheme }), [mode, toggleTheme])

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
