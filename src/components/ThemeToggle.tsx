import { useContext } from 'react'
import { ThemeContext } from '../app/providers/ThemeProvider'

export default function ThemeToggle () {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-primary text-white rounded-md"
      type="button"
    >
      Toggle Theme
    </button>
  )
}
