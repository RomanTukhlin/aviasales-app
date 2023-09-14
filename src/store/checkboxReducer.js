const defaultState = {
  checkbox: [
    { value: 'Все', id: 'all', checked: false },
    { value: 'Без пересадок', id: 'noTransfer', checked: false },
    { value: '1 пересадка', id: 'oneTransfer', checked: false },
    { value: '2 пересадки', id: 'twoTransfer', checked: false },
    { value: '3 пересадки', id: 'threeTransfer', checked: false },
  ],
}

export const checkboxReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'CHECK_ALL':
      return { ...state, checkbox: [...state.checkbox.map((item) => ({ ...item, checked: true }))] }
    case 'UNCHECK_ALL':
      return { ...state, checkbox: [...state.checkbox.map((item) => ({ ...item, checked: false }))] }
    case 'ONE_CHECK':
      return {
        ...state,
        checkbox: [
          ...state.checkbox.map((item) => (payload === item.id ? { ...item, checked: !item.checked } : { ...item })),
        ],
      }
    default:
      return { ...state }
  }
}

export const checkAllAction = (payload) => ({ type: 'CHECK_ALL', payload })
export const uncheckAllAction = (payload) => ({ type: 'UNCHECK_ALL', payload })
export const checkOneAction = (payload) => ({ type: 'ONE_CHECK', payload })
