import { combineReducers } from 'redux'
import { PROJECTS, UPDATES, LINKS } from '../constants'

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

/*export const filterList = (state = 0) => {
	for (let item of PROJECTS) {
		for (let x of item.languages) {
			if (x.name === 'React') {
				item.visible = true;
				state++;
				break;
			} else {
				item.visible = false;
			}
		}
		return state
	}
}*/

export const footerDate = (state = new Date().getFullYear()) => state

export const projects = (state = PROJECTS) => state

export const updates = (state = UPDATES) => state

export const links = (state = LINKS) => state

export const rootReducer = combineReducers({
  footerDate,
  projects,
  links,
  updates,
  uniqueLanguages
})
