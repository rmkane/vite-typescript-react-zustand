/**
 * Creates a throttled function that limits the rate at which the provided function can be invoked
 *
 * @param func - The function to throttle
 * @param delay - The number of milliseconds to throttle by
 * @returns A throttled version of the function
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let lastCall = 0

  return (...args: Parameters<T>) => {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      func(...args)
    }
  }
}
