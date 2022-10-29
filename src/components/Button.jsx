import React from 'react'
import "./button.css"
const Button = ({
    link, id , text, ...other 
}) => {
  return (
    <a href={link} id={id} {...other} className="btn">{text}</a>
  )
}

export default Button
