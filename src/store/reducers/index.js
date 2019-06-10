import { combineReducers } from 'redux'
import { PROJECTS, UPDATES, MONTHS, LINKS } from '../constants'

export const uniqueLanguages = (state = PROJECTS, action) => {
	const options = [];
	const uniqueOptions = [];
	state.forEach((option) => {
		options.push(...option.languages);
	});
	options.forEach((option)=>{
		if(!uniqueOptions.includes(option.name)) {
			uniqueOptions.push(option.name);
		}
	})
	state = uniqueOptions.sort();
	return state
}

export const selectRandomProjects = (state = '') => {
	let random = Math.floor(Math.random() * PROJECTS.length);
	let project = PROJECTS[random];
	state = project
	return state
}
export const footerDate = (state = new Date().getFullYear()) => state

export const projects = (state = PROJECTS) => state

export const months = (state = MONTHS) => state

export const updates = (state = UPDATES) => state

export const links = (state = LINKS) => state

export const rootReducer = combineReducers({
  footerDate,
  projects,
  links,
  updates,
  months,
  uniqueLanguages,
  selectRandomProjects
})
