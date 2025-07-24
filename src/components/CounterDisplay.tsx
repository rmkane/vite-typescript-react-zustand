import { useCount } from '@/store/counterStore'

export default function CounterDisplay() {
  const count = useCount()
  return (
    <div className="mb-6 text-center">
      <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">
        Current Count
      </h2>
      <div className="text-6xl font-bold text-indigo-600 dark:text-indigo-400">
        {count}
      </div>
    </div>
  )
}
