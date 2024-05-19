import React, { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({children, className, ...rest}: ButtonProps) => {
  return (
    <button
      className={`w-full cursor-pointer rounded-lg border border-border-primary bg-bg-dark text-font-white p-3 transition hover:bg-bg-blue ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button;
