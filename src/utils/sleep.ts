/**
 * Creates a promise that resolves after the specified number of milliseconds
 *
 * @param ms - The number of milliseconds to wait
 * @returns A promise that resolves after the delay
 */
export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
