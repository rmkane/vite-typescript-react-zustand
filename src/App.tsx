import reactLogo from '@assets/react.svg'
import Counter from '@components/Counter'

import viteLogo from '/vite.svg'

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
        {/* Header with logos */}
        <div className="mb-6 flex justify-center space-x-8">
          <a
            href="https://vite.dev"
            target="_blank"
            className="transition-transform duration-200 hover:scale-110"
          >
            <img src={viteLogo} className="h-12 w-12" alt="Vite logo" />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="transition-transform duration-200 hover:scale-110"
          >
            <img
              src={reactLogo}
              className="animate-spin-slow h-12 w-12"
              alt="React logo"
            />
          </a>
        </div>

        {/* Title */}
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800 dark:text-white">
          Vite + React + Zustand
        </h1>
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          With Tailwind CSS
        </p>

        {/* Counter component */}
        <Counter />

        {/* Instructions */}
        <div className="space-y-2 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Edit{' '}
            <code className="rounded bg-gray-200 px-2 py-1 font-mono text-xs dark:bg-gray-600">
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
