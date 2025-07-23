import { useDecrement, useIncrement } from '@hooks'

export default function CounterControls() {
  const decrement = useDecrement()
  const increment = useIncrement()

  return (
    <div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  )
}
