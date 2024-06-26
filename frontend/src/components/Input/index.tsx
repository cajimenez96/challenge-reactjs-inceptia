import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
}

const Input = ({id, label, className, ...rest}: InputProps) => {
  return (
    <>
      {label && (<label htmlFor={id} className="block mb-4 text-sm font-medium">{label}</label>)}
      <input
        id={id}
        className={`w-full rounded-lg bg-transparent py-3 pl-6 pr-10 text-black outline-none border border-primary focus:primary focus-visible:border-secondary ${className}`}
        {...rest} 
      />
    </>
  )
}

export default Input;
