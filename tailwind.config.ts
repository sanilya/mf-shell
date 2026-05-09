import type { Config } from 'tailwindcss'
import { tailwindPreset } from '@mf/theme'

const config: Config = {
  presets: [tailwindPreset],
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],

  theme: {
    extend: {}
  },

  plugins: []
}

export default config
