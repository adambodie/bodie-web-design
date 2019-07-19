import * as types from '../constants';

export function counter(text) {
	return {
		type: types.COUNTER,
		text
	}
}

export function reset(text) {
	return {
		type: types.RESET,
		text
	}
}

export function sortByTitle(text) {
	return {
		type: types.SORT_BY_TITLE,
		text
	}
}

export function sortByCreated(text) {
	return {
		type: types.SORT_BY_CREATED,
		text
	}
}

export function sortByUpdated(text) {
	return {
		type: types.SORT_BY_UPDATED,
		text
	}
}



