import { combineReducers } from 'redux'

export const footerDate = (state = new Date().getFullYear(), action) => state

export const rootReducer = combineReducers({
  footerDate
})
