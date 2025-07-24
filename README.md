# Vite + React + Zustand + TypeScript

A modern React application showcasing a powerful tech stack with state management,
testing, and developer experience tools.

## 🚀 Tech Stack

### **Core Framework**

- **[Vite 7](https://vitejs.dev/)** - Lightning-fast build tool and dev server
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript 5.8](https://www.typescriptlang.org/)** - Type-safe development

### **State Management**

- **[Zustand 5](https://github.com/pmndrs/zustand)** - Lightweight, scalable state
  management
- **Async Actions** - Built-in support for async operations
- **Debounced/Throttled Actions** - Performance-optimized user interactions

### **Styling & UI**

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **Dark Mode Support** - Automatic theme switching
- **Responsive Design** - Mobile-first approach
- **Custom Animations** - Smooth transitions and effects

### **Testing**

- **[Vitest](https://vitest.dev/)** - Fast unit testing framework
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** - Component testing utilities
- **[JSDOM](https://github.com/jsdom/jsdom)** - DOM simulation for tests
- **Coverage Reports** - Built-in test coverage analysis

### **Developer Experience**

- **[ESLint 9](https://eslint.org/)** - Code linting with flat config
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Import Sorting](https://github.com/IanVS/prettier-plugin-sort-imports)** -
  Automatic import organization
- **Path Aliases** - Clean imports with `@/` prefixes
- **Hot Module Replacement** - Instant development feedback

## 🎯 Features

### **Counter Application**

- **Real-time Counter** - Increment/decrement with immediate feedback
- **Async Operations** - Simulated API calls with loading states
- **Debounced Actions** - Prevents rapid-fire button clicks
- **Throttled Actions** - Limits action frequency for performance
- **State Persistence** - Maintains state across component re-renders

### **Modern UI Components**

- **Theme System** - Dark mode with system preference detection
- **Form Components** - Input fields with validation and accessibility
- **Layout Components** - Cards, headers, and content containers
- **Status Indicators** - Badges and loading spinners
- **Responsive Design** - Mobile-first approach with Tailwind CSS

### **Developer Tools**

- **TypeScript Path Mapping** - Intuitive import paths
- **Automatic Formatting** - Consistent code style
- **Import Organization** - Clean, sorted imports
- **Error Boundaries** - Graceful error handling
- **Performance Monitoring** - Built-in performance tools

## 🛠️ Getting Started

### **Prerequisites**

- Node.js 18+
- pnpm (recommended) or npm

### **Installation**

```bash
# Clone the repository
git clone <repository-url>
cd vite-typescript-react-zustand

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### **Available Scripts**

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build

# Testing
pnpm test         # Run tests in watch mode
pnpm test:ui      # Run tests with UI
pnpm test:run     # Run tests once
pnpm test:coverage # Run tests with coverage

# Code Quality
pnpm lint         # Check for linting errors
pnpm lint:fix     # Fix linting errors
pnpm lint:md      # Check markdown files
pnpm lint:md:fix  # Fix markdown files
pnpm format       # Format code with Prettier
pnpm format:check # Check code formatting
pnpm fix          # Run lint:fix + lint:md:fix + format
```

## 📁 Project Structure

```text
src/
├── components/          # Reusable React components
│   ├── Button.tsx      # Custom button component
│   ├── Counter.tsx     # Main counter wrapper
│   ├── CounterControls.tsx  # Counter action buttons
│   ├── CounterDisplay.tsx   # Counter value display
│   └── ui/             # Modern UI component library
│       ├── Badge.tsx   # Status indicators
│       ├── Card.tsx    # Content containers
│       ├── Input.tsx   # Form inputs
│       ├── Spinner.tsx # Loading indicators
│       ├── ThemeProvider.tsx # Theme management
│       └── ThemeToggle.tsx   # Theme switcher
├── store/              # Zustand state management
│   ├── counterStore.ts # Main counter store
│   └── *.test.ts       # Store unit tests
├── utils/              # Utility functions
│   ├── debounce.ts     # Debounce utility
│   ├── throttle.ts     # Throttle utility
│   ├── sleep.ts        # Async delay utility
│   └── utils.test.ts   # Utility tests
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme context definition
├── hooks/              # Custom React hooks
│   └── useTheme.ts     # Theme hook
├── assets/             # Static assets
├── test/               # Test configuration
└── App.tsx             # Main application component
```

## 🔧 Configuration

### **Path Aliases**

```typescript
// Clean imports with path aliases
import { useCount } from '@/store/counterStore'
import Button from '@/components/Button'
import { debounce } from '@/utils/debounce'
```

### **Import Order**

Automatically sorted imports:

1. **Built-in modules** (Node.js, browser APIs)
2. **Third-party modules** (React, testing libraries)
3. **Internal modules** (`@/` aliases)
4. **Relative imports** (`./`, `../`)

### **Code Formatting**

- **Semicolons**: Disabled
- **Quotes**: Single quotes
- **Trailing commas**: Always
- **Tab width**: 2 spaces
- **Tailwind classes**: Automatically sorted

## 🧪 Testing

### **Unit Tests**

```bash
# Test the counter store logic
pnpm test src/store/counterStore.test.ts

# Test utility functions
pnpm test src/utils/utils.test.ts
```

### **Integration Tests**

```bash
# Test React components with hooks
pnpm test src/store/counterStore.hooks.test.tsx
```

### **Test Coverage**

```bash
# Generate coverage report
pnpm test:coverage
```

## 🎨 Styling

### **Tailwind CSS**

- **Utility-first** approach
- **Custom animations** (e.g., `animate-spin-slow`)
- **Dark mode** support
- **Responsive design** patterns

### **Component Styling**

```tsx
// Example of styled component
<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
  Click me
</button>
```

## 📦 State Management

### **Zustand Store**

```typescript
// Clean, simple state management
const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  actions: {
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    // Async, debounced, and throttled actions
  }
}))
```

### **Store Features**

- **Type-safe** state and actions
- **Async operations** with loading states
- **Debounced actions** for performance
- **Throttled actions** for rate limiting
- **Composable hooks** for easy consumption

## 🚀 Performance

### **Optimizations**

- **Vite** for fast builds and HMR
- **React 19** with concurrent features
- **Debounced/throttled** user interactions
- **Code splitting** with dynamic imports
- **Tree shaking** for smaller bundles

### **Development Experience**

- **Instant feedback** with HMR
- **Type checking** in real-time
- **Automatic formatting** on save
- **Import sorting** for clean code
- **Error boundaries** for stability

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `pnpm test`
5. Format code: `pnpm format`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using modern web technologies
