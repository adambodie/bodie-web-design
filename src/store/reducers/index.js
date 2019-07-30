import { combineReducers } from 'redux';
import { LINKS } from '../constants';
import { PROJECTS } from '../constants/projects';
import { UPDATES } from '../constants/updates';
import { selectRandomProjects } from './projects'; 
import { sortByTitle } from './title';
import { sortByUpdated } from './updated';
import { sortByCreated } from './created';
import { uniqueLanguages } from './languages';
import { filterList } from './filter';

export const projects = (state = PROJECTS.reverse()) => state
export const updates = (state = UPDATES) => state
export const links = (state = LINKS) => state

export const rootReducer = combineReducers({
	projects,
	links,
	updates,
	uniqueLanguages,
	selectRandomProjects,
	filterList,
	sortByTitle,
	sortByCreated,
	sortByUpdated,
})
