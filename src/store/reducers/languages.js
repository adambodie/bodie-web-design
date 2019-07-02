import { PROJECTS } from '../constants'

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
