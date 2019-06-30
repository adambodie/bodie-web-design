import { COUNTER, RESET } from '../constants'

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
