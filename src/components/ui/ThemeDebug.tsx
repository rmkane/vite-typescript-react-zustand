import { useTheme } from '@/hooks/useTheme'

export function ThemeDebug() {
  const { theme, isDark } = useTheme()

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
      <h3 className="text-sm font-bold text-gray-900 dark:text-white">
        Theme Debug
      </h3>
      <div className="mt-2 space-y-1 text-xs">
        <p className="text-gray-600 dark:text-gray-400">
          Current theme: <span className="font-mono">{theme}</span>
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Is dark:{' '}
          <span className="font-mono">{isDark ? 'true' : 'false'}</span>
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          HTML classes:{' '}
          <span className="font-mono">
            {document.documentElement.classList.toString()}
          </span>
        </p>
        <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
          <p className="text-gray-900 dark:text-white">Test background</p>
        </div>
      </div>
    </div>
  )
}
