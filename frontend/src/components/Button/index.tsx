import React, { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({children, className, ...rest}: ButtonProps) => {
  return (
    <button
      className={`w-full cursor-pointer rounded-lg border border-primary bg-dark text-font-white p-3 transition hover:bg-blue ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button;
