import React from 'react'
import './Button.scss'

export const Button = (props) => {
  return (
    <button onClick={() => props.showMoreTicketsClick()} type="submit" className="button">
      {props.children}
    </button>
  )
}
