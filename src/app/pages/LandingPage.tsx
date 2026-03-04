import { Link } from 'react-router-dom'

export default function LandingPage () {
  return (
    <div className="min-h-[60vh] flex items-center">
      <div className="w-full max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-sm">
          <span className="font-medium">MF Shell</span>
          <span className="text-slate-600 dark:text-slate-300">Design system foundation</span>
        </div>

        <h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight">
          Micro-frontend platform starter
        </h2>

        <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
          This is a dummy landing page served on <span className="font-mono">/</span>. It uses the shell
          theme provider, Tailwind tokens, and dark mode to ensure future micro-frontends inherit the
          same foundation.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/login"
            className="px-4 py-2 bg-primary text-white rounded-md"
          >
            Go to Login
          </Link>
          <Link
            to="/dashboard"
            className="px-4 py-2 bg-secondary text-white rounded-md"
          >
            Go to Dashboard
          </Link>
        </div>

        <div className="mt-8 p-4 rounded-lg bg-white dark:bg-slate-800 border border-border-light dark:border-border-dark">
          <div className="text-sm text-slate-600 dark:text-slate-300">
            Tip: Use the <span className="font-medium">Toggle Theme</span> button in the header to verify
            light/dark styles.
          </div>
        </div>
      </div>
    </div>
  )
}
