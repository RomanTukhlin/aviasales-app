import React, { useEffect } from 'react'
import './Filters.scss'
import { useDispatch, useSelector } from 'react-redux'

import {
  checkAllAction,
  checkOneAction,
  uncheckOneAction,
  setFilterStatusAction,
  uncheckAllAction,
} from '../../store/checkboxReducer'
import { FiltersItem } from '../FiltersItem/FiltersItem'

export const Filters = () => {
  const dispatch = useDispatch()
  const { filterStatus, checkbox } = useSelector((state) => state.checkbox)
  useEffect(() => {
    dispatch(setFilterStatusAction())
  }, [checkbox])
  useEffect(() => {
    if (filterStatus.length === 4) {
      dispatch(checkOneAction('all'))
    }
    if (filterStatus.length < 4) {
      dispatch(uncheckOneAction('all'))
    }
  }, [filterStatus.length])
  const allInputToggle = () => {
    const allInput = checkbox.find((item) => item.id === 'all')
    if (allInput.checked === false) {
      dispatch(checkAllAction())
    }
    if (allInput.checked === true) {
      dispatch(uncheckAllAction())
    }
  }
  const toggleInput = (id) => {
    if (id === 'all') {
      allInputToggle(id)
    }
    if (filterStatus.includes(id)) {
      dispatch(uncheckOneAction(id))
    } else if (filterStatus.length <= 4 && id !== 'all') {
      dispatch(checkOneAction(id))
    }
  }
  return (
    <div className="filters">
      <h2 className="filters__title">Количество пересадок</h2>
      {checkbox.map(({ value, id, checked }) => {
        return <FiltersItem key={id} id={id} value={value} toggleInput={() => toggleInput(id)} checked={checked} />
      })}
    </div>
  )
}
