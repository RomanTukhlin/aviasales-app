const defaultState = {
  filterStatus: [],
  checkbox: [
    { value: 'Все', id: 'all', checked: true },
    { value: 'Без пересадок', id: 'noTransfer', checked: true },
    { value: '1 пересадка', id: 'oneTransfer', checked: true },
    { value: '2 пересадки', id: 'twoTransfer', checked: true },
    { value: '3 пересадки', id: 'threeTransfer', checked: true },
  ],
}

export const checkboxReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'CHECK_ALL':
      return {
        ...state,
        checkbox: [...state.checkbox.map((item) => ({ ...item, checked: true }))],
      }
    case 'UNCHECK_ALL':
      return {
        ...state,
        checkbox: [...state.checkbox.map((item) => ({ ...item, checked: false }))],
      }
    case 'ONE_CHECK':
      return {
        ...state,
        checkbox: [...state.checkbox.map((item) => (payload === item.id ? { ...item, checked: true } : { ...item }))],
      }
    case 'ONE_UNCHECK':
      return {
        ...state,
        checkbox: [...state.checkbox.map((item) => (payload === item.id ? { ...item, checked: false } : { ...item }))],
      }
    case 'SET_FILTER_STATUS':
      return {
        ...state,
        filterStatus: state.checkbox.filter((el) => el.id !== 'all' && el.checked).map((el) => el.id),
      }
    default:
      return { ...state }
  }
}

export const checkAllAction = (payload) => ({ type: 'CHECK_ALL', payload })
export const uncheckAllAction = (payload) => ({ type: 'UNCHECK_ALL', payload })
export const checkOneAction = (payload) => ({ type: 'ONE_CHECK', payload })
export const uncheckOneAction = (payload) => ({ type: 'ONE_UNCHECK', payload })
export const setFilterStatusAction = (payload) => ({ type: 'SET_FILTER_STATUS', payload })
