import { combineReducers } from 'redux'
import { PROJECTS, UPDATES, MONTHS, LINKS } from '../constants'

export const uniqueLanguages = (state = PROJECTS) => {
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
	const banners = [];
	let projectCopy = Object.assign([], PROJECTS);
	for (let i = 0; i < 3; i++) {
		let random = Math.floor(Math.random() * projectCopy.length);
		let project = projectCopy[random];
		banners.push(project);
		projectCopy.splice(random, 1);
	}
	state = banners
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
