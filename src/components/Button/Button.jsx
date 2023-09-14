import React from 'react'
import './Button.scss'

export const Button = (props) => {
  return (
    <button type="submit" className="button">
      {props.children}
    </button>
  )
}
