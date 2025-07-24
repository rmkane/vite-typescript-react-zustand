import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

interface CardTitleProps {
  children: ReactNode
  className?: string
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

interface CardFooterProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 ${className}`}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return (
    <h3
      className={`text-lg font-semibold text-gray-900 dark:text-gray-100 ${className}`}
    >
      {children}
    </h3>
  )
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={`${className}`}>{children}</div>
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div
      className={`mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 ${className}`}
    >
      {children}
    </div>
  )
}
