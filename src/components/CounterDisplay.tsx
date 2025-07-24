import { useCount } from '@store/counterStore'

export default function CounterDisplay() {
  const count = useCount()
  return (
    <div className="text-center mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
        Current Count
      </h2>
      <div className="text-6xl font-bold text-indigo-600 dark:text-indigo-400">
        {count}
      </div>
    </div>
  )
}
