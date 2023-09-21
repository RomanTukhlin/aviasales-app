import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { sortReducer } from './sortReducer'
import { checkboxReducer } from './checkboxReducer'
import { ticketsReducer } from './ticketsReducer'

const rootReducer = combineReducers({
  checkbox: checkboxReducer,
  tickets: ticketsReducer,
  sort: sortReducer,
})

export const store = configureStore(
  {
    reducer: rootReducer,
  },
  composeWithDevTools(applyMiddleware(thunk))
)
