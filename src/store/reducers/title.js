import { PROJECTS, SORT_BY_TITLE } from '../constants'

const compareTitle = function(a,b) {
	if (a.title > b.title) {
		return -1;
	}
	if (a.title < b.title) {
		return 1;
	}
	return 0;
}

let initialTitleState = { titleOrder: 'A-Z', titleCount: 0 }

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

