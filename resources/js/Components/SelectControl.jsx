import React from 'react'

export default function SelectControl ({
    options,
    name,
    value,
    className = '',
    autoComplete,
    required,
    isDisabled = false,
    handleChange,
}) {
  return (
    <select 
      name={name}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`}
      required={required}
      // disabled={isDisabled}
      onChange={(e) => handleChange(e)}
    >
      <option 
      disabled 
      selected={ value !== null }>Nuevo padre {`${value}`}</option>
      {
        options && options.map( (item,i) => (
          <option 
            key={i} 
            value={item.value} 
            selected={value == item.value} 
          >{item.text}</option>
        ))
      }
    </select>
  )
}
