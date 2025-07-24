import reactLogo from '@/assets/react.svg'

import Counter from '@/components/Counter'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { ThemeDebug } from '@/components/ui/ThemeDebug'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

import viteLogo from '/vite.svg'

function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 dark:from-gray-900 dark:to-gray-800">
        <div className="w-full max-w-4xl space-y-6">
          {/* Header with theme toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a
                href="https://vite.dev"
                target="_blank"
                className="transition-transform duration-200 hover:scale-110"
              >
                <img src={viteLogo} className="h-8 w-8" alt="Vite logo" />
              </a>
              <a
                href="https://react.dev"
                target="_blank"
                className="transition-transform duration-200 hover:scale-110"
              >
                <img
                  src={reactLogo}
                  className="animate-spin-slow h-8 w-8"
                  alt="React logo"
                />
              </a>
            </div>
            <ThemeToggle />
          </div>

          {/* Title */}
          <div className="text-center">
            <h1 className="mb-2 text-4xl font-bold text-gray-800 dark:text-white">
              Modern UI Components
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Vite + React + Zustand + Tailwind CSS
            </p>
          </div>

          {/* Component showcase */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Counter Card */}
            <Card>
              <CardHeader>
                <CardTitle>Counter with Zustand</CardTitle>
              </CardHeader>
              <CardContent>
                <Counter />
              </CardContent>
            </Card>

            {/* Form Card */}
            <Card>
              <CardHeader>
                <CardTitle>Form Components</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  helperText="We'll never share your email"
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  error="Password is required"
                />
              </CardContent>
            </Card>

            {/* Badges Card */}
            <Card>
              <CardHeader>
                <CardTitle>Status Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Instructions Card */}
            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <ThemeDebug />
    </ThemeProvider>
  )
}

export default App
