import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from '../components/ErrorBoundary'
import LandingPage from './pages/LandingPage'

const AuthRoutes = lazy(() => import('authApp/AuthRoutes'))
const DashboardRoutes = lazy(() => import('dashboardApp/DashboardRoutes'))

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-48 text-sm text-black/60 dark:text-white/60">
    Loading micro-frontend...
  </div>
)

const MicrofrontendErrorFallback = ({ name }: { name: string }) => (
  <div className="m-6 rounded-lg border border-[color:var(--mf-border)] bg-[color:var(--mf-surface)] p-6 text-center text-[color:var(--mf-text)]">
    <h3 className="text-lg font-semibold">Unable to load {name}</h3>
    <p className="mt-2 text-sm text-black/60 dark:text-white/60">
      Please ensure the {name} micro-frontend is running.
    </p>
    <p className="mt-2 text-sm text-black/60 dark:text-white/60">
      Expected remoteEntry:{' '}
      http://localhost:{name === 'Auth' ? '5001' : '5002'}/assets/remoteEntry.js
    </p>
  </div>
)

export default function AppRoutes () {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      
      <Route 
        path="/auth/*"
        element={
          <ErrorBoundary fallback={<MicrofrontendErrorFallback name="Auth" />}>
            <Suspense fallback={<LoadingFallback />}>
              <AuthRoutes />
            </Suspense>
          </ErrorBoundary>
        } 
      />
      
      <Route 
        path="/dashboard/*"
        element={
          <ErrorBoundary fallback={<MicrofrontendErrorFallback name="Dashboard" />}>
            <Suspense fallback={<LoadingFallback />}>
              <DashboardRoutes />
            </Suspense>
          </ErrorBoundary>
        } 
      />
    </Routes>
  )
}