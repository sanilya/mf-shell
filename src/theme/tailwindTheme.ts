import { tokens } from './tokens'

export const tailwindTheme = {
  colors: tokens.colors,
  fontFamily: {
    sans: tokens.typography.fontFamily.sans.split(',').map(s => s.trim())
  },
  borderRadius: {
    md: `${tokens.radii.md}px`,
    lg: `${tokens.radii.lg}px`,
    xl: `${tokens.radii.xl}px`
  }
} as const
