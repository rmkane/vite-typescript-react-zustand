import { create } from 'zustand'

import { debounce } from '@/utils/debounce'
import { sleep } from '@/utils/sleep'
import { throttle } from '@/utils/throttle'

// Timing constants
const DELAY_MS = 1000
const DEBOUNCE_MS = 300
const THROTTLE_MS = 500

export interface CounterState {
  count: number
  actions: CounterActions
}

export interface CounterActions {
  // Basic actions
  increment: () => void
  decrement: () => void

  // Async actions
  incrementAsync: () => void
  decrementAsync: () => void

  // Debounced actions
  incrementDebounced: () => void
  decrementDebounced: () => void

  // Throttled actions
  incrementThrottled: () => void
  decrementThrottled: () => void
}

// Do not export the store, only the hooks
const useCounterStore = create<CounterState>((set) => {
  // Base increment and decrement functions
  const increment = () => set((state) => ({ count: state.count + 1 }))
  const decrement = () => set((state) => ({ count: state.count - 1 }))

  return {
    count: 0,
    actions: {
      // Basic actions
      increment,
      decrement,

      // Async actions
      incrementAsync: async () => {
        await sleep(DELAY_MS)
        set((state) => ({ count: state.count + 1 }))
      },
      decrementAsync: async () => {
        await sleep(DELAY_MS)
        set((state) => ({ count: state.count - 1 }))
      },

      // Debounced actions
      incrementDebounced: debounce(increment, DEBOUNCE_MS),
      decrementDebounced: debounce(decrement, DEBOUNCE_MS),

      // Throttled actions
      incrementThrottled: throttle(increment, THROTTLE_MS),
      decrementThrottled: throttle(decrement, THROTTLE_MS),
    },
  }
})

export const useCount = () => useCounterStore((state) => state.count)

// Should be a referencial, so it's not re-created on every render
export const useActions = () => useCounterStore((state) => state.actions)

export { useCounterStore }
