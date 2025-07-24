import { useActions } from '@/store/counterStore'
import CounterButton from '@/components/CounterButton'

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
      <CounterButton onClick={decrement} variant="decrement">
        -1
      </CounterButton>
      <CounterButton onClick={increment} variant="increment">
        +1
      </CounterButton>
      {/* Async actions */}
      <CounterButton
        onClick={decrementAsync}
        variant="decrement"
        subvariant="async"
      >
        -1 Async
      </CounterButton>
      <CounterButton
        onClick={incrementAsync}
        variant="increment"
        subvariant="async"
      >
        +1 Async
      </CounterButton>
      {/* Debounced actions */}
      <CounterButton
        onClick={decrementDebounced}
        variant="decrement"
        subvariant="debounced"
      >
        -1 Debounced
      </CounterButton>
      <CounterButton
        onClick={incrementDebounced}
        variant="increment"
        subvariant="debounced"
      >
        +1 Debounced
      </CounterButton>
      {/* Throttled actions */}
      <CounterButton
        onClick={decrementThrottled}
        variant="decrement"
        subvariant="throttled"
      >
        -1 Throttled
      </CounterButton>
      <CounterButton
        onClick={incrementThrottled}
        variant="increment"
        subvariant="throttled"
      >
        +1 Throttled
      </CounterButton>
    </div>
  )
}
