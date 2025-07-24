import { beforeEach, describe, expect, it, vi } from 'vitest'

import { debounce } from '@/utils/debounce'
import { sleep } from '@/utils/sleep'
import { throttle } from '@/utils/throttle'

describe('Utility Functions', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  describe('sleep', () => {
    it('should resolve after the specified delay', async () => {
      const start = Date.now()
      const sleepPromise = sleep(1000)

      vi.advanceTimersByTime(1000)
      await sleepPromise

      expect(Date.now() - start).toBe(1000)
    })

    it('should handle zero delay', async () => {
      const start = Date.now()
      const sleepPromise = sleep(0)

      vi.advanceTimersByTime(0)
      await sleepPromise

      expect(Date.now() - start).toBe(0)
    })
  })

  describe('debounce', () => {
    it('should delay function execution', () => {
      const mockFn = vi.fn()
      const debouncedFn = debounce(mockFn, 1000)

      debouncedFn()
      debouncedFn()
      debouncedFn()

      expect(mockFn).not.toHaveBeenCalled()

      vi.advanceTimersByTime(1000)
      expect(mockFn).toHaveBeenCalledTimes(1)
    })

    it('should pass arguments correctly', () => {
      const mockFn = vi.fn()
      const debouncedFn = debounce(mockFn, 1000)

      debouncedFn('test', 123)
      vi.advanceTimersByTime(1000)

      expect(mockFn).toHaveBeenCalledWith('test', 123)
    })

    it('should reset timer on subsequent calls', () => {
      const mockFn = vi.fn()
      const debouncedFn = debounce(mockFn, 1000)

      debouncedFn()
      vi.advanceTimersByTime(500)
      debouncedFn()
      vi.advanceTimersByTime(500)

      expect(mockFn).not.toHaveBeenCalled()

      vi.advanceTimersByTime(500)
      expect(mockFn).toHaveBeenCalledTimes(1)
    })
  })

  describe('throttle', () => {
    it('should limit function execution rate', () => {
      const mockFn = vi.fn()
      const throttledFn = throttle(mockFn, 1000)

      throttledFn()
      throttledFn()
      throttledFn()

      expect(mockFn).toHaveBeenCalledTimes(1)
    })

    it('should allow execution after delay', () => {
      const mockFn = vi.fn()
      const throttledFn = throttle(mockFn, 1000)

      throttledFn()
      expect(mockFn).toHaveBeenCalledTimes(1)

      vi.advanceTimersByTime(1000)
      throttledFn()
      expect(mockFn).toHaveBeenCalledTimes(2)
    })

    it('should pass arguments correctly', () => {
      const mockFn = vi.fn()
      const throttledFn = throttle(mockFn, 1000)

      throttledFn('test', 123)
      expect(mockFn).toHaveBeenCalledWith('test', 123)
    })

    it('should not execute if called before delay', () => {
      const mockFn = vi.fn()
      const throttledFn = throttle(mockFn, 1000)

      throttledFn()
      expect(mockFn).toHaveBeenCalledTimes(1)

      vi.advanceTimersByTime(500)
      throttledFn()
      expect(mockFn).toHaveBeenCalledTimes(1)

      vi.advanceTimersByTime(500)
      throttledFn()
      expect(mockFn).toHaveBeenCalledTimes(2)
    })
  })
})
