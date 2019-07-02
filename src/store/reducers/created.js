import { PROJECTS, SORT_BY_CREATED } from '../constants'

export const compareCreated = function(a,b) {
	if (a.created > b.created) {
		return -1;
	}
	if (a.created < b.created) {
		return 1;
	}
	return 0;
}

let initialCreatedState = { createdOrder: 'Oldest', createdCount: 0 }

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

