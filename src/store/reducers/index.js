import { combineReducers } from 'redux'
import { PROJECTS, UPDATES, MONTHS, LINKS, COUNTER, RESET, SORT_BY_TITLE, SORT_BY_CREATED, SORT_BY_UPDATED } from '../constants'

let initialTitleState = { titleOrder: 'A-Z', titleCount: 0 }
let initialCreatedState = { createdOrder: 'Oldest', createdCount: 0 }
let initialUpdatedState = { updatedOrder: 'Oldest', updatedCount: 0 }

const compareTitle = function(a,b) {
	if (a.title > b.title) {
		return -1;
	}
	if (a.title < b.title) {
		return 1;
	}
	return 0;
}

const compareCreated = function(a,b) {
	if (a.created > b.created) {
		return -1;
	}
	if (a.created < b.created) {
		return 1;
	}
	return 0;
}

const compareUpdated = function(a,b) {
	if (a.updated > b.updated) {
		return -1;
	}
	if (a.updated < b.updated) {
		return 1;
	}
	return 0;
}

export const footerDate = (state = new Date().getFullYear()) => state
export const projects = (state = PROJECTS) => state
export const months = (state = MONTHS) => state
export const updates = (state = UPDATES) => state
export const links = (state = LINKS) => state

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

export function sortByTitle(state = initialTitleState, action) {
	switch (action.type) {
		case SORT_BY_TITLE:
			let order = '';
			if (state.titleCount % 2 === 0) {
				PROJECTS.sort(compareTitle).reverse();
				order = 'Z-A';
			} else {
				order = 'A-Z';
				PROJECTS.sort(compareTitle);
			}
			let newTitleCount = state.titleCount;
			newTitleCount++;
			state.titleOrder = order;
			state.titleCount = newTitleCount++;
			return state
		default:
			return state;
	}
}

export function sortByCreated(state = initialCreatedState, action) {
	switch (action.type) {
		case SORT_BY_CREATED:
			let order = '';
			if (state.createdCount % 2 === 0) {
				PROJECTS.sort(compareCreated).reverse();
				order = 'Newest';
			} else {
				order = 'Oldest';
				PROJECTS.sort(compareCreated);
			}
			let newCreatedCount = state.createdCount;
			newCreatedCount++;
			state.createdOrder = order;
			state.createdCount = newCreatedCount++;
			return state
		default:
			return state;
	}
}

export function sortByUpdated(state = initialUpdatedState, action) {
	switch (action.type) {
		case SORT_BY_UPDATED:
			let order = '';
			if (state.updatedCount % 2 === 0) {
				PROJECTS.sort(compareUpdated).reverse();
				order = 'Newest';
			} else {
				order = 'Oldest';
				PROJECTS.sort(compareUpdated);
			}
			let newUpdatedCount = state.updatedCount;
			newUpdatedCount++;
			state.updatedOrder = order;
			state.updatedCount = newUpdatedCount++;
			return state
		default:
			return state;
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
  filterList,
  sortByTitle,
  sortByCreated,
  sortByUpdated
})
