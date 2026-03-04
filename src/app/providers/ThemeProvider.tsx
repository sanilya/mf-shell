import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { createContext, useCallback, useMemo, useState } from 'react'
import type { PropsWithChildren } from 'react'
import { darkTheme, lightTheme } from '../../theme/muiTheme'

type ThemeContextValue = {
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue>({
  toggleTheme: () => {}
})

export default function ThemeProvider ({ children }: Readonly<PropsWithChildren>) {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  const toggleTheme = useCallback(() => {
    setMode(prev => {
      const next = prev === 'light' ? 'dark' : 'light'
      document.documentElement.classList.toggle('dark', next === 'dark')
      return next
    })
  }, [])

  const theme = useMemo(() => {
    return mode === 'light' ? lightTheme : darkTheme
  }, [mode])

  const contextValue = useMemo(() => ({ toggleTheme }), [toggleTheme])

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
