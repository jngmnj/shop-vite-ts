import '@/styles/button.css';
import { cn } from '@/utils/style';
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'filled' | 'outlined' | 'whiteOutlined';
  size?: 'lg' | 'xl';
}
const baseClass = 'btn';
const sizeMap = {
  lg: 'btn-lg',
  xl: 'btn-xl',
};
const variantMap = {
  filled: 'btn-filled',
  outlined: 'btn-outlined',
  whiteOutlined: 'btn-white-outlined',
};

const Button = ({
  children,
  href,
  type,
  className,
  variant = 'filled',
  size = 'lg',
  ...rest
}: ButtonProps) => {
  const finalClass = cn(
    baseClass,
    sizeMap[size],
    variantMap[variant],
    className,
  );

  if (href) {
    return (
      <Link to={href} className={finalClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={finalClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
