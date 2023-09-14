const defaultState = {
  active: 'free',
  sort: [
    { id: 'free', value: 'самый дешевый' },
    { id: 'fast', value: 'самый быстрый' },
    { id: 'optimal', value: 'оптимальный' },
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
