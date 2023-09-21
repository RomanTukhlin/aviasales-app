import uniqid from 'uniqid'

const defaultState = {
  tickets: [],
  searchId: null,
  stopStatus: false,
  errorStatus: null, // null, error
}

export const ticketsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'GET_TICKETS':
      return {
        ...state,
        tickets: [...state.tickets, ...payload.tickets.map((ticket) => ({ id: uniqid(), ...ticket }))],
        stopStatus: payload.stop,
      }
    case 'SET_SEARCH_ID':
      return {
        ...state,
        searchId: payload.searchId,
      }
    case 'SET_ERROR_STATUS':
      return {
        ...state,
        errorStatus: payload,
      }
    default:
      return { ...state }
  }
}

export const getTicketsAction = (payload) => ({ type: 'GET_TICKETS', payload })
export const setSearchIdAction = (payload) => ({ type: 'SET_SEARCH_ID', payload })
export const setErrorStatusAction = (payload) => ({ type: 'SET_ERROR_STATUS', payload })
