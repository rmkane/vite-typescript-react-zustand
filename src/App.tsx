import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Counter from '@components/Counter'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
        {/* Header with logos */}
        <div className="flex justify-center space-x-8 mb-6">
          <a
            href="https://vite.dev"
            target="_blank"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img src={viteLogo} className="h-12 w-12" alt="Vite logo" />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img
              src={reactLogo}
              className="h-12 w-12 animate-spin-slow"
              alt="React logo"
            />
          </a>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">
          Vite + React + Zustand
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
          With Tailwind CSS
        </p>

        {/* Counter component */}
        <Counter />

        {/* Instructions */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Edit{' '}
            <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-xs font-mono">
              src/App.tsx
            </code>{' '}
            and save to test HMR
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
