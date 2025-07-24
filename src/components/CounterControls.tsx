import Button from '@/components/Button'
import { useActions } from '@/store/counterStore'

export default function CounterControls() {
  const {
    decrement,
    decrementAsync,
    decrementDebounced,
    decrementThrottled,
    increment,
    incrementAsync,
    incrementDebounced,
    incrementThrottled,
  } = useActions()

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Basic actions */}
      <div className="flex items-center justify-center gap-4">
        <Button onClick={decrement} variant="decrement">
          -1
        </Button>
        <Button onClick={increment} variant="increment">
          +1
        </Button>
      </div>

      {/* Async actions */}
      <div className="flex items-center justify-center gap-4">
        <Button onClick={decrementAsync} variant="decrement">
          -1 Async
        </Button>
        <Button onClick={incrementAsync} variant="increment">
          +1 Async
        </Button>
      </div>

      {/* Debounced actions */}
      <div className="flex items-center justify-center gap-4">
        <Button onClick={decrementDebounced} variant="decrement">
          -1 Debounced
        </Button>
        <Button onClick={incrementDebounced} variant="increment">
          +1 Debounced
        </Button>
      </div>

      {/* Throttled actions */}
      <div className="flex items-center justify-center gap-4">
        <Button onClick={decrementThrottled} variant="decrement">
          -1 Throttled
        </Button>
        <Button onClick={incrementThrottled} variant="increment">
          +1 Throttled
        </Button>
      </div>
    </div>
  )
}
