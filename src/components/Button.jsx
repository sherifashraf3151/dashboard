import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius, icon, onClick, bgHoverColor }) => {
  return (
    <button type='button' onClick={onClick} style={{ backgroundColor: bgColor, color, borderRadius }} className={`text-${size} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor ? bgHoverColor : ''} flex justify-center items-center`} >
      {icon && icon}
      {text && <span className={icon ? 'ml-2' : ''}>{text}</span>} 
    </button>
  )
}

export default Button
