import { SORT_BY_TITLE } from '../constants'
import { PROJECTS } from '../constants/projects'

const compareTitle = function(a,b) {
	if (a.title > b.title) {
		return -1
	}
	if (a.title < b.title) {
		return 1
	}
	return 0
}

let initialTitleState = { titleOrder: '', titleCount: 0 }

export function sortByTitle(state = initialTitleState, action) {
	switch (action.type) {
		case SORT_BY_TITLE:
			let order = ''
			let newTitleCount = state.titleCount
			newTitleCount++
			if (state.titleCount % 2 === 0) {
				PROJECTS.sort(compareTitle).reverse()
				order = 'A-Z'
			} else {
				order = 'Z-A'
				PROJECTS.sort(compareTitle)
			}
			state.titleOrder = order
			state.titleCount = newTitleCount++
			return state
		default:
			return state
	}
}

