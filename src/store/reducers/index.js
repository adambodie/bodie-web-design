import { combineReducers } from 'redux'
import { PROJECTS, UPDATES, MONTHS, LINKS } from '../constants'
import { selectRandomProjects } from './projects'; 
import { sortByTitle } from './title';
import { sortByUpdated } from './updated';
import { sortByCreated } from './created';
import { uniqueLanguages } from './languages';
import { filterList } from './filter';

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
	selectRandomProjects,
	filterList,
	sortByTitle,
	sortByCreated,
	sortByUpdated,
})
