import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './features/AuthContext'
import './styles/global.css'

const loadUi = async () => {
  const mod: any = await import('uiApp/ui')
  const resolved = typeof mod === 'function' ? await mod() : mod
  if (resolved?.default && !resolved?.ThemeProvider) return resolved.default
  return resolved
}

const UiThemeProvider = React.lazy(() =>
  loadUi().then(m => ({
    default: m.ThemeProvider as React.ComponentType<React.PropsWithChildren<any>>
  }))
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback={null}>
        <UiThemeProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </UiThemeProvider>
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>
)