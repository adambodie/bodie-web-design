import { PROJECTS, SORT_BY_UPDATED } from '../constants'

export const compareUpdated = function(a,b) {
	if (a.updated > b.updated) {
		return -1;
	}
	if (a.updated < b.updated) {
		return 1;
	}
	return 0;
}

let initialUpdatedState = { updatedOrder: 'Newest', updatedCount: 0 }

export function sortByUpdated(state = initialUpdatedState, action) {
	switch (action.type) {
		case SORT_BY_UPDATED:
			let order = '';
			if (state.updatedCount % 2 === 0) {
				PROJECTS.sort(compareUpdated).reverse();
				order = 'Oldest';
			} else {
				order = 'Newest';
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


