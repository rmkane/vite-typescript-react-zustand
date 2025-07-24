# Testing with Vitest

This project uses [Vitest](https://vitest.dev/) for testing, configured to work with React components and Zustand stores.

## Setup

The testing setup includes:

- **Vitest**: Fast unit testing framework
- **jsdom**: DOM environment for testing React components
- **@testing-library/react**: React component testing utilities
- **@testing-library/jest-dom**: Custom Jest matchers for DOM elements

## Running Tests

```bash
# Run tests in watch mode (development)
pnpm test

# Run tests once
pnpm test:run

# Run tests with UI
pnpm test:ui

# Run tests with coverage
pnpm test:coverage
```

## Testing Zustand Stores

### 1. Testing Store Logic Directly

Create test files with `.test.ts` extension for testing store logic:

```typescript
import { beforeEach, describe, expect, it } from 'vitest'

import { useCounterStore } from '@store/counterStore'

describe('counterStore', () => {
  beforeEach(() => {
    // Reset store state before each test
    useCounterStore.setState({
      count: 0,
      actions: useCounterStore.getState().actions,
    })
  })

  it('should increment count', () => {
    const { actions } = useCounterStore.getState()
    actions.increment()
    expect(useCounterStore.getState().count).toBe(1)
  })
})
```

### 2. Testing Hooks in React Components

Create test files with `.test.tsx` extension for testing hooks in React components:

```typescript
import { render, screen, fireEvent } from '@testing-library/react'

import { useCount, useActions } from '@store/counterStore'

const TestComponent = () => {
  const count = useCount()
  const actions = useActions()

  return (
    <div>
      <span data-testid="count">{count}</span>
      <button onClick={actions.increment}>Increment</button>
    </div>
  )
}

it('should update count when button is clicked', () => {
  render(<TestComponent />)
  fireEvent.click(screen.getByText('Increment'))
  expect(screen.getByTestId('count')).toHaveTextContent('1')
})
```

## Best Practices

### 1. Reset Store State

Always reset the store state in `beforeEach` to ensure test isolation:

```typescript
beforeEach(() => {
  useCounterStore.setState({
    count: 0,
    actions: useCounterStore.getState().actions,
  })
})
```

### 2. Test Store Actions

Test that actions correctly update the store state:

```typescript
it('should handle multiple actions', () => {
  const { actions } = useCounterStore.getState()

  actions.increment()
  actions.increment()
  actions.decrement()

  expect(useCounterStore.getState().count).toBe(1)
})
```

### 3. Test Hook Selectors

Verify that your custom hooks return the expected values:

```typescript
it('should return current count', () => {
  useCounterStore.setState({
    count: 5,
    actions: useCounterStore.getState().actions,
  })
  const count = useCounterStore.getState().count
  expect(count).toBe(5)
})
```

### 4. Test Component Integration

Test how components interact with the store:

```typescript
it('should render updated state', () => {
  useCounterStore.setState({ count: 3, actions: useCounterStore.getState().actions })
  render(<TestComponent />)
  expect(screen.getByTestId('count')).toHaveTextContent('3')
})
```

## File Structure

```none
src/
├── store/
│   ├── counterStore.ts
│   ├── counterStore.test.ts          # Store logic tests
│   └── counterStore.hooks.test.tsx   # Hook integration tests
└── test/
    └── setup.ts                      # Test configuration
```

## Configuration

The testing configuration is in `vite.config.ts`:

```typescript
test: {
  globals: true,
  environment: 'jsdom',
  setupFiles: ['./src/test/setup.ts'],
}
```

This setup provides:

- Global test functions (`describe`, `it`, `expect`)
- DOM environment for React testing
- Custom matchers and mocks
