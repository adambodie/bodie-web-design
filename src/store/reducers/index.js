import { combineReducers } from 'redux'
import { PROJECTS } from '../constants'
const linkArray = [{name: 'Home', link: '/'}, {name: 'About', link: '/about'}, {name: 'Pictures', link: '/pictures'}]

export const footerDate = (state = new Date().getFullYear(), action) => state

export const projects = (state = PROJECTS, action) => state

export const links = (state = linkArray) => state

export const rootReducer = combineReducers({
  footerDate,
  projects,
  links
})
