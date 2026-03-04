import { useLocation } from 'react-router-dom'
import AppRoutes from './app/routes'
import { useAuth } from './features/useAuth'
import { ErrorBoundary } from './components/ErrorBoundary'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

function App() {
  const location = useLocation()
  const { user } = useAuth()

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>MF Shell</h1>
          <nav className="main-nav">
            <span className="nav-info">
              Current Route: {location.pathname}
            </span>
            {user && (
              <span className="user-info">
                Welcome, {user.email}
              </span>
            )}
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="app-main">
        <div className="mb-6 p-6 bg-white dark:bg-slate-800 rounded-lg border border-border-light dark:border-border-dark">
          Theme system working
        </div>
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
      </main>

      <footer className="app-footer">
        <p>Micro-Frontend Shell Application</p>
      </footer>
    </div>
  )
}

export default App
