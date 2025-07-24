import CounterControls from '@components/CounterControls'
import CounterDisplay from '@components/CounterDisplay'

export default function Counter() {
  return (
    <div className="rounded-xl bg-gray-50 p-6 dark:bg-gray-700">
      <CounterDisplay />
      <CounterControls />
    </div>
  )
}
