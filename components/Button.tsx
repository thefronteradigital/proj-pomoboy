import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon' | 'text';
  active?: boolean;
  className?: string;
  color?: string; // For text color override in primary mode
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  active = false, 
  className = '', 
  color,
  ...props 
}) => {
  let baseStyles = "transition-all duration-200 rounded font-bold cursor-pointer flex items-center justify-center ";
  
  if (variant === 'primary') {
    baseStyles += `bg-white text-[${color || '#ba4949'}] px-6 py-3 text-2xl shadow-[0_4px_0_rgb(235,235,235)] active:shadow-none active:translate-y-[4px] uppercase `;
  } else if (variant === 'secondary') {
    baseStyles += "bg-white/20 text-white px-3 py-1.5 text-sm hover:bg-white/30 ";
  } else if (variant === 'icon') {
    baseStyles += "bg-white/20 text-white p-2 text-sm hover:bg-white/30 min-w-[32px] ";
  } else if (variant === 'text') {
    baseStyles += "text-white/60 hover:bg-black/10 px-3 py-1 rounded ";
    if (active) baseStyles += "bg-black/15 font-bold text-white ";
  }

  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};
