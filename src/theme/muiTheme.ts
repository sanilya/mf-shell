import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#4F46E5' },
    secondary: { main: '#14B8A6' },

    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF'
    }
  },

  typography: {
    fontFamily: 'Inter, sans-serif'
  },

  shape: {
    borderRadius: 8
  }
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#6366F1' },
    secondary: { main: '#2DD4BF' },

    background: {
      default: '#0F172A',
      paper: '#1E293B'
    }
  },

  typography: {
    fontFamily: 'Inter, sans-serif'
  },

  shape: {
    borderRadius: 8
  }
})
