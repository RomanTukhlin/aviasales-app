const defaultState = {
  active: 'optimal',
  sort: [
    { id: 'optimal', value: 'оптимальный' },
    { id: 'free', value: 'самый дешевый' },
    { id: 'fast', value: 'самый быстрый' },
  ],
}
export const sortReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'SORT_CHANGE':
      return { ...state, active: payload }
    default:
      return state
  }
}

export const sortChangeAction = (payload) => ({ type: 'SORT_CHANGE', payload })
