import React from 'react'
import './FiltersItem.scss'

export const FiltersItem = ({ value, id, checked, toggleInput }) => {
  return (
    <label className="filters-item">
      <input checked={checked} onChange={toggleInput} id={id} type="checkbox" className="filters-item__input" />
      <span className="filters-item__checkbox"></span>
      {value}
    </label>
  )
}
