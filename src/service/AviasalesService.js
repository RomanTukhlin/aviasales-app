import { getTicketsAction, setSearchIdAction, setErrorStatusAction } from '../store/ticketsReducer'

const api_URL = 'https://aviasales-test-api.kata.academy/'

export const getSearchId = () => {
  return async (dispatch) => {
    const res = await (await fetch(`${api_URL}search`)).json()
    return dispatch(setSearchIdAction(res))
  }
}
export const getTickets = (searchId) => {
  return (dispatch) => {
    return fetch(`${api_URL}tickets?searchId=${searchId}`)
      .then((res) => {
        if (res.status === 500 || res.status === 502) {
          return { tickets: [], stop: false }
        }
        if (res.status === 400) {
          dispatch(setErrorStatusAction('error'))
        }
        return res.json()
      })
      .then((json) => dispatch(getTicketsAction(json)))
      .catch((e) => new Error(e))
  }
}
