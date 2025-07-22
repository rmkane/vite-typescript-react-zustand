import { useCounterStore } from '@store/counterStore'

export default function CounterDisplay() {
  const count = useCounterStore((state) => state.count)
  return <h2>Current Count: {count}</h2>
}
