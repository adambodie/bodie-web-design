import { combineReducers } from 'redux'
import { PROJECTS, UPDATES, LINKS } from '../constants'

export const footerDate = (state = new Date().getFullYear()) => state

export const projects = (state = PROJECTS) => state

export const updates = (state = UPDATES) => state

export const links = (state = LINKS) => state

export const rootReducer = combineReducers({
  footerDate,
  projects,
  links,
  updates
})
