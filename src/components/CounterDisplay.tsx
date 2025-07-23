import { useCount } from '@store/counterStore'

export default function CounterDisplay() {
  const count = useCount()
  return <h2>Current Count: {count}</h2>
}
