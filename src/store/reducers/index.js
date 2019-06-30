import { combineReducers } from 'redux'
import { PROJECTS, UPDATES, MONTHS, LINKS, COUNTER, RESET } from '../constants'

export const uniqueLanguages = (state = '') => {
	const options = [];
	const uniqueOptions = [];
	PROJECTS.forEach((option) => options.push(...option.languages));
	options.forEach((option) => {
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

export function filterList(state = 10, action) {
	switch (action.type) {
		case COUNTER:
			let newCount = 0;
			const language = action.text;
			for (let item of PROJECTS) {
			for (let x of item.languages) {
				if (x.name === language) {
					newCount++;
					item.visible = true;
					break;
				} else {
					item.visible = false;
				}
			}
		}
			state = newCount;
			return state;
		case RESET:
			for (let item of PROJECTS) {item.visible = true}
			state = 10
			return state
		default:
			return state
	}
}

export const rootReducer = combineReducers({
  footerDate,
  projects,
  links,
  updates,
  months,
  uniqueLanguages,
  selectRandomProjects,
  filterList
})
