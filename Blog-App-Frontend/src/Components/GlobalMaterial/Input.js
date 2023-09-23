import React from 'react'

const Input = ({type,placeholder,name,value,onChange,icon,padding}) => {
  return (
  <input  type={type} 
     placeholder={placeholder} 
     name={name} value={value} 
     onChange={onChange}
      icon={icon}
      style={{ padding }}
      />
  )
}

export default Input
