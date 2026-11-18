import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:   ButtonVariant
  size?:      ButtonSize
  href?:      string
  rightIcon?: React.ReactNode
  leftIcon?:  React.ReactNode
  className?: string
  children?:  React.ReactNode
  onClick?:   (e: React.MouseEvent<HTMLElement>) => void
}

const variantClass: Record<ButtonVariant, string> = {
  primary:   'bg-[#111110] text-white font-semibold hover:bg-[#2a2a28]',
  secondary: 'border border-black/[0.1] text-[#3A3A37] hover:border-black/20 hover:text-[#111110] bg-white',
  ghost:     'text-[#9A9A95] hover:text-[#111110]',
}

const sizeClass: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-xs',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size    = 'md',
  href,
  rightIcon,
  leftIcon,
  className = '',
  children,
  onClick,
  ...rest
}) => {
  const base = `inline-flex items-center gap-2 rounded transition-all duration-200 font-mono uppercase tracking-wider ${variantClass[variant]} ${sizeClass[size]} ${className}`

  if (href) {
    return (
      <a href={href} onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>} className={base}>
        {leftIcon}{children}{rightIcon}
      </a>
    )
  }
  return (
    <button onClick={onClick as React.MouseEventHandler<HTMLButtonElement>} className={base} {...rest}>
      {leftIcon}{children}{rightIcon}
    </button>
  )
}
