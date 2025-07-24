import CounterControls from '@components/CounterControls'
import CounterDisplay from '@components/CounterDisplay'

export default function Counter() {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
      <CounterDisplay />
      <CounterControls />
    </div>
  )
}
