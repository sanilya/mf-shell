import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],

  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#14B8A6',

        background: {
          light: '#F8FAFC',
          dark: '#0F172A'
        },

        surface: {
          light: '#FFFFFF',
          dark: '#1E293B'
        },

        border: {
          light: '#E2E8F0',
          dark: '#475569'
        }
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },

      borderRadius: {
        md: '8px',
        lg: '12px',
        xl: '16px'
      }
    }
  },

  plugins: []
}

export default config
