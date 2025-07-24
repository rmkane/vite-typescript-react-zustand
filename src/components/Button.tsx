import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
  variant: 'increment' | 'decrement'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const variantStyles = {
  increment: {
    basic: 'bg-blue-500 hover:bg-blue-600',
    async: 'bg-green-500 hover:bg-green-600',
    debounced: 'bg-teal-500 hover:bg-teal-600',
    throttled: 'bg-cyan-500 hover:bg-cyan-600',
  },
  decrement: {
    basic: 'bg-red-500 hover:bg-red-600',
    async: 'bg-orange-500 hover:bg-orange-600',
    debounced: 'bg-yellow-500 hover:bg-yellow-600',
    throttled: 'bg-pink-500 hover:bg-pink-600',
  },
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3',
  lg: 'px-8 py-4 text-lg',
}

function getStyleVariant(
  buttonText: string,
): keyof typeof variantStyles.increment {
  const text = buttonText.toLowerCase()

  if (text.includes('async')) return 'async'
  if (text.includes('debounced')) return 'debounced'
  if (text.includes('throttled')) return 'throttled'

  return 'basic'
}

export default function Button({
  children,
  onClick,
  variant,
  size = 'md',
  className = '',
}: ButtonProps) {
  const buttonText = children?.toString() || ''
  const styleVariant = getStyleVariant(buttonText)

  const baseStyles =
    'transform rounded-lg font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95'
  const variantStyle = variantStyles[variant][styleVariant]
  const sizeStyle = sizeStyles[size]

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className}`}
    >
      {children}
    </button>
  )
}
