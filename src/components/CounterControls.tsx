import { useActions } from '@store/counterStore'

export default function CounterControls() {
  const { increment, decrement } = useActions()

  return (
    <div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  )
}
