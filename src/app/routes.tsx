import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from '../components/ErrorBoundary'
import LandingPage from './pages/LandingPage'

const LoginPage = lazy(() => import('authApp/LoginPage'))
const DashboardPage = lazy(() => import('dashboardApp/DashboardPage'))

const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '200px',
    fontSize: '16px'
  }}>
    Loading micro-frontend...
  </div>
)

const MicrofrontendErrorFallback = ({ name }: { name: string }) => (
  <div style={{ 
    padding: '20px', 
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '20px'
  }}>
    <h3>Unable to load {name}</h3>
    <p>Please ensure the {name} micro-frontend is running.</p>
    <p>Expected URL: http://localhost:{name === 'Auth' ? '5001' : '5002'}/</p>
  </div>
)

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      
      <Route 
        path="/login" 
        element={
          <ErrorBoundary fallback={<MicrofrontendErrorFallback name="Auth" />}>
            <Suspense fallback={<LoadingFallback />}>
              <LoginPage />
            </Suspense>
          </ErrorBoundary>
        } 
      />
      
      <Route 
        path="/dashboard" 
        element={
          <ErrorBoundary fallback={<MicrofrontendErrorFallback name="Dashboard" />}>
            <Suspense fallback={<LoadingFallback />}>
              <DashboardPage />
            </Suspense>
          </ErrorBoundary>
        } 
      />
    </Routes>
  )
}