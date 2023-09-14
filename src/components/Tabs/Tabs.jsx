import React from 'react'
import './Tabs.scss'
import { useDispatch, useSelector } from 'react-redux'

import { sortChangeAction } from '../../store/sortReducer'

export const Tabs = () => {
  const dispatch = useDispatch()
  const { active, sort } = useSelector((state) => state.sort)
  const sortChange = (e) => {
    const id = e.target.id
    if (active !== id) {
      dispatch(sortChangeAction(id))
    }
  }
  return (
    <div className="tabs">
      {sort.map(({ id, value }) => {
        return (
          <button
            type="submit"
            className={active === id ? 'tabs__item active' : 'tabs__item'}
            id={id}
            key={id}
            onClick={sortChange}
          >
            {value}
          </button>
        )
      })}
    </div>
  )
}
