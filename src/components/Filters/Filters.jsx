import React from 'react'
import './Filters.scss'
import { useDispatch, useSelector } from 'react-redux'

import { checkAllAction, checkOneAction, uncheckAllAction } from '../../store/checkboxReducer'
import { FiltersItem } from '../FiltersItem/FiltersItem'

export const Filters = () => {
  const dispatch = useDispatch()
  const checkBoxItem = useSelector((state) => state.checkbox.checkbox)
  const allInputToggle = () => {
    const allInput = checkBoxItem.find((item) => item.id === 'all')
    if (allInput.checked === false) {
      dispatch(checkAllAction())
    }
    if (allInput.checked === true) {
      dispatch(uncheckAllAction())
    }
  }
  const toggleInput = (id) => {
    const checkedLength = checkBoxItem.filter((item) => item.checked).length
    console.log(checkedLength)
    if (id === 'all') {
      allInputToggle()
    }
    if (id !== 'all' && checkedLength <= checkBoxItem.length) {
      dispatch(checkOneAction(id))
      if (checkedLength >= 3 && checkedLength < 5) {
        dispatch(checkOneAction('all'))
      }
    }
  }

  return (
    <div className="filters">
      <h2 className="filters__title">Количество пересадок</h2>
      {checkBoxItem.map(({ value, id, checked }) => {
        return <FiltersItem key={id} id={id} value={value} toggleInput={() => toggleInput(id)} checked={checked} />
      })}
    </div>
  )
}
