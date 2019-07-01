import { COUNTER, RESET, SORT_BY_TITLE, SORT_BY_CREATED, SORT_BY_UPDATED } from '../constants'

export function counter(text) {
	return {
		type: COUNTER,
		text
	}
}

export function reset(text) {
	return {
		type: RESET,
		text
	}
}

export function sortByTitle(text) {
	return {
		type: SORT_BY_TITLE,
		text
	}
}

export function sortByCreated(text) {
	return {
		type: SORT_BY_CREATED,
		text
	}
}

export function sortByUpdated(text) {
	return {
		type: SORT_BY_UPDATED,
		text
	}
}
