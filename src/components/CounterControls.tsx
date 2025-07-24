import { useActions } from '@/store/counterStore'
import Button from '@/components/Button'

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
    <div className="grid grid-cols-2 gap-4">
      {/* Basic actions */}
      <Button onClick={decrement} variant="decrement">
        -1
      </Button>
      <Button onClick={increment} variant="increment">
        +1
      </Button>
      {/* Async actions */}
      <Button onClick={decrementAsync} variant="decrement" subvariant="async">
        -1 Async
      </Button>
      <Button onClick={incrementAsync} variant="increment" subvariant="async">
        +1 Async
      </Button>
      {/* Debounced actions */}
      <Button
        onClick={decrementDebounced}
        variant="decrement"
        subvariant="debounced"
      >
        -1 Debounced
      </Button>
      <Button
        onClick={incrementDebounced}
        variant="increment"
        subvariant="debounced"
      >
        +1 Debounced
      </Button>
      {/* Throttled actions */}
      <Button
        onClick={decrementThrottled}
        variant="decrement"
        subvariant="throttled"
      >
        -1 Throttled
      </Button>
      <Button
        onClick={incrementThrottled}
        variant="increment"
        subvariant="throttled"
      >
        +1 Throttled
      </Button>
    </div>
  )
}
