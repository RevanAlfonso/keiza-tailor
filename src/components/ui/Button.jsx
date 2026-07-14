import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-[#153a73] shadow-soft hover:shadow-md',
    secondary: 'bg-secondary text-white hover:bg-[#3891cc] shadow-soft hover:shadow-md',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    whatsapp: 'bg-accent text-white hover:bg-[#73a633] shadow-soft hover:shadow-md',
    ghost: 'hover:bg-gray-100 text-text-primary'
  };

  const sizes = {
    default: 'h-11 px-6 py-2',
    sm: 'h-9 px-4 text-sm',
    lg: 'h-14 px-8 text-lg',
    icon: 'h-11 w-11'
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
