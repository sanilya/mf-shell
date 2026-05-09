import { useCallback } from 'react'
import { Button, useThemeMode } from 'uiApp/ui'

export default function ThemeToggle () {
  const { mode, toggleMode } = useThemeMode()
  const onToggle = useCallback(() => toggleMode(), [toggleMode])

  return (
    <Button variant="ghost" onClick={onToggle}>
      {mode === 'dark' ? 'Light' : 'Dark'}
    </Button>
  )
}
