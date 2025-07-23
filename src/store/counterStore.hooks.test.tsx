import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { useCounterStore, useCount, useActions } from './counterStore'

// Test component that uses the hooks
const TestCounter = () => {
  const count = useCount()
  const actions = useActions()

  return (
    <div>
      <span data-testid="count">{count}</span>
      <button data-testid="increment" onClick={actions.increment}>
        Increment
      </button>
      <button data-testid="decrement" onClick={actions.decrement}>
        Decrement
      </button>
    </div>
  )
}

describe('counterStore hooks in React components', () => {
  beforeEach(() => {
    // Reset the store to initial state before each test
    useCounterStore.setState({
      count: 0,
      actions: useCounterStore.getState().actions,
    })
  })

  it('should render initial count of 0', () => {
    render(<TestCounter />)

    const countElement = screen.getByTestId('count')
    expect(countElement).toHaveTextContent('0')
  })

  it('should increment count when increment button is clicked', () => {
    render(<TestCounter />)

    const incrementButton = screen.getByTestId('increment')
    const countElement = screen.getByTestId('count')

    fireEvent.click(incrementButton)

    expect(countElement).toHaveTextContent('1')
  })

  it('should decrement count when decrement button is clicked', () => {
    render(<TestCounter />)

    const decrementButton = screen.getByTestId('decrement')
    const countElement = screen.getByTestId('count')

    fireEvent.click(decrementButton)

    expect(countElement).toHaveTextContent('-1')
  })

  it('should handle multiple clicks correctly', () => {
    render(<TestCounter />)

    const incrementButton = screen.getByTestId('increment')
    const decrementButton = screen.getByTestId('decrement')
    const countElement = screen.getByTestId('count')

    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    fireEvent.click(decrementButton)
    fireEvent.click(incrementButton)

    expect(countElement).toHaveTextContent('2')
  })

  it('should maintain state between renders', () => {
    const { rerender } = render(<TestCounter />)

    const incrementButton = screen.getByTestId('increment')
    fireEvent.click(incrementButton)

    // Re-render the component
    rerender(<TestCounter />)

    const countElement = screen.getByTestId('count')
    expect(countElement).toHaveTextContent('1')
  })
})
