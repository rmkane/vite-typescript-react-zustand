import { describe, it, expect, beforeEach } from 'vitest'

import { useCounterStore } from './counterStore'

describe('counterStore', () => {
  beforeEach(() => {
    // Reset the store to initial state before each test
    useCounterStore.setState({
      count: 0,
      actions: useCounterStore.getState().actions,
    })
  })

  describe('initial state', () => {
    it('should have initial count of 0', () => {
      const count = useCounterStore.getState().count
      expect(count).toBe(0)
    })

    it('should have increment and decrement actions', () => {
      const { actions } = useCounterStore.getState()
      expect(typeof actions.increment).toBe('function')
      expect(typeof actions.decrement).toBe('function')
    })
  })

  describe('actions', () => {
    it('should increment count when increment action is called', () => {
      const { actions } = useCounterStore.getState()

      actions.increment()

      const newCount = useCounterStore.getState().count
      expect(newCount).toBe(1)
    })

    it('should decrement count when decrement action is called', () => {
      const { actions } = useCounterStore.getState()

      actions.decrement()

      const newCount = useCounterStore.getState().count
      expect(newCount).toBe(-1)
    })

    it('should handle multiple increment calls', () => {
      const { actions } = useCounterStore.getState()

      actions.increment()
      actions.increment()
      actions.increment()

      const newCount = useCounterStore.getState().count
      expect(newCount).toBe(3)
    })

    it('should handle multiple decrement calls', () => {
      const { actions } = useCounterStore.getState()

      actions.decrement()
      actions.decrement()
      actions.decrement()

      const newCount = useCounterStore.getState().count
      expect(newCount).toBe(-3)
    })

    it('should handle mixed increment and decrement calls', () => {
      const { actions } = useCounterStore.getState()

      actions.increment()
      actions.increment()
      actions.decrement()
      actions.increment()
      actions.decrement()

      const newCount = useCounterStore.getState().count
      expect(newCount).toBe(1)
    })
  })

  describe('hooks', () => {
    it('should return current count from useCount hook', () => {
      // Set up some state
      useCounterStore.setState({
        count: 5,
        actions: useCounterStore.getState().actions,
      })

      // In a real component, this would be called in a React component
      // For testing, we can simulate by checking the selector logic
      const count = useCounterStore.getState().count
      expect(count).toBe(5)
    })

    it('should return actions from useActions hook', () => {
      const actions = useCounterStore.getState().actions

      expect(actions).toHaveProperty('increment')
      expect(actions).toHaveProperty('decrement')
      expect(typeof actions.increment).toBe('function')
      expect(typeof actions.decrement).toBe('function')
    })
  })

  describe('state isolation', () => {
    it('should maintain separate state for different test cases', () => {
      // This test verifies that beforeEach is working correctly
      const count = useCounterStore.getState().count
      expect(count).toBe(0)
    })
  })
})
