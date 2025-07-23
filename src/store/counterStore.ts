import { create } from 'zustand'

export interface CounterState {
  count: number
  actions: CounterActions
}

export interface CounterActions {
  increment: () => void
  decrement: () => void
}

// Do not export the store, only the hooks
const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  actions: {
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  },
}))

export const useCount = () => useCounterStore((state) => state.count)

// Should be a referencial, so it's not re-created on every render
export const useActions = () => useCounterStore((state) => state.actions)
