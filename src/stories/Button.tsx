'use client'
import { ReactNode } from 'react';

export interface ButtonProps {
  /** Button variant style */
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'outline' | 'tertiary';
  /** How large should the button be? */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Button contents */
  label: string;
  /** Icon to display before the label */
  iconBefore?: ReactNode;
  /** Icon to display after the label */
  iconAfter?: ReactNode;
  /** Optional click handler */
  onClick?: () => void;
  /** Optional custom background color override */
  backgroundColor?: string;
  /** Optional disabled state */
  disabled?: boolean;
  /** Optional type attribute */
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'primary',
  size = 'md',
  backgroundColor,
  label,
  iconBefore,
  iconAfter,
  disabled = false,
  type = 'button',
  ...props
}: ButtonProps) => {
  // Base button classes
  const baseClasses = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium cursor-pointer ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0';
  
  // Variant-specific classes
  const variantClasses = {
    primary: 'bg-brand-500 text-white hover:bg-brand-600 hover:-translate-y-0.5 focus:ring-brand-500',
    secondary: 'bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50 hover:-translate-y-0.5 focus:ring-gray-500',
    tertiary: 'bg-[#BEA1C2] text-white border border-gray-300 hover:bg-gray-50 hover:-translate-y-0.5 focus:ring-gray-500',
    destructive: 'bg-red-500 text-white hover:bg-red-600 hover:-translate-y-0.5 focus:ring-red-500',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-800 hover:-translate-y-0.5 focus:ring-gray-500',
    outline: 'bg-transparent text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white hover:-translate-y-0.5 focus:ring-ring'
  };
  
  // Size-specific classes
  const sizeClasses = {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-2.5 text-base',
    xl: 'px-12 py-2.5 text-base'
  };

  const className = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'hover:transform-none',
    props.className // Add custom classes at the end so they can override defaults
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
      aria-label={label}
    >
      {iconBefore && <span className="flex-shrink-0">{iconBefore}</span>}
      {label}
      {iconAfter && <span className="flex-shrink-0">{iconAfter}</span>}
    </button>
  );
};