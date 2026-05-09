import React from 'react'
import { useLocation } from 'react-router-dom'
import AppRoutes from './app/routes'
import { useAuth } from './features/useAuth'
import { ErrorBoundary } from './components/ErrorBoundary'
import ThemeToggle from './components/ThemeToggle'

const loadUi = async () => {
  const mod: any = await import('uiApp/ui')
  const resolved = typeof mod === 'function' ? await mod() : mod
  if (resolved?.default && !resolved?.AppLayout) return resolved.default
  return resolved
}

const UiAppLayout = React.lazy(() =>
  loadUi().then(m => ({
    default: m.AppLayout as React.ComponentType<React.PropsWithChildren<any>>
  }))
)

function App () {
  const location = useLocation()
  const { user } = useAuth()

  return (
    <React.Suspense fallback={null}>
      <UiAppLayout
        title="MF Platform"
        sidebarItems={[
          { label: 'Home', href: '/' },
          { label: 'Auth', href: '/auth/login' },
          { label: 'Dashboard', href: '/dashboard' }
        ]}
        headerRight={(
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-sm text-black/60 dark:text-white/60">
              {location.pathname}
            </span>
            {user && (
              <span className="hidden md:inline text-sm text-black/60 dark:text-white/60">
                {user.email}
              </span>
            )}
            <ThemeToggle />
          </div>
        )}
      >
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
      </UiAppLayout>
    </React.Suspense>
  )
}

export default App
