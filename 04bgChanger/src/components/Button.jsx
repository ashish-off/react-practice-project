import React from 'react'

const Button = ({color}) => {
  console.log(color);
  
  return (
    <button
    onClick={() => setColor({color})}
    className="outline-none px-5 py-1.5 rounded-xl shadow-2xl font-semibold text-white  " 
    style={{backgroundColor: color}}>{color}</button>
  )
}

export default Button