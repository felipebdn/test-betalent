import React from 'react'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <label className="flex w-full md:max-w-[287px] border-gray-10 border overflow-hidden rounded-[8px] bg-white py-3 px-4">
        <input
          type="text"
          {...props}
          ref={ref}
          className="outline-none flex-1 placeholder:text-gray-20"
          placeholder="Pesquisar"
        />
        <img src="/icons/search.svg" alt="Ícone de lupa" />
      </label>
    )
  }
)
Input.displayName = 'Input'
export { Input }
