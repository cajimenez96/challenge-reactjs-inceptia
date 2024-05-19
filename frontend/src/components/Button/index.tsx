import React, { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({children, className, ...rest}: ButtonProps) => {
  return (
    <button
      className={`w-full cursor-pointer rounded-lg border border-border-primary bg-bg-secondary p-3 text-font-primary transition hover:bg-bg-primary hover:text-font-secondary hover:border-border-secondary ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button;
