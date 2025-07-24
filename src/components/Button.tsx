import type { ReactNode } from 'react'

import clsx from 'clsx'

import type { NestedRecord } from '@/types/nested-record'

type Variant = 'increment' | 'decrement'
type Subvariant = 'basic' | 'async' | 'debounced' | 'throttled'

export interface ButtonProps {
  onClick: () => void
  variant: Variant
  subvariant?: Subvariant
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: ReactNode
}

const variantStyles: NestedRecord<Variant, Subvariant, string> = {
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

const baseStyles = [
  'transform',
  'rounded-lg',
  'font-semibold',
  'text-white',
  'shadow-md',
  'transition-all',
  'duration-200',
  'cursor-pointer',
  'hover:scale-105',
  'hover:shadow-lg',
  'active:scale-95',
]

export default function Button({
  onClick,
  variant,
  subvariant = 'basic',
  size = 'md',
  className = '',
  children,
}: ButtonProps) {
  const variantStyle = variantStyles[variant][subvariant]
  const sizeStyle = sizeStyles[size]

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(baseStyles, variantStyle, sizeStyle, className)}
    >
      {children}
    </button>
  )
}
