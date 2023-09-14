import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'

import { sortReducer } from './sortReducer'
import { checkboxReducer } from './checkboxReducer'

const rootReducer = combineReducers({
  checkbox: checkboxReducer,
  sort: sortReducer,
})

export const store = configureStore(
  {
    reducer: rootReducer,
  },
  composeWithDevTools()
)
