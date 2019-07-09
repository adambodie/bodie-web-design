import * as actions from '../store/actions/';
import * as constants from '../store/constants';

describe('actions', () => {
	it('should create an action to change the counter', () => {
		const text = '10'
		const expectedAction = {
			type: constants.COUNTER,
			text
		}
		expect(actions.counter(text)).toEqual(expectedAction)
	});
	it('should create an action to reset the counter', () => {
		const text = '10'
		const expectedAction = {
			type: constants.RESET,
			text
		}
		expect(actions.reset(text)).toEqual(expectedAction)
	});
	it('should create an action to sort by title', () => {
		const text = ''
		const expectedAction = {
			type: constants.SORT_BY_TITLE,
			text
		}
		expect(actions.sortByTitle(text)).toEqual(expectedAction)
	});
	it('should create an action to sort by updated', () => {
		const text = ''
		const expectedAction = {
			type: constants.SORT_BY_UPDATED,
			text
		}
		expect(actions.sortByUpdated(text)).toEqual(expectedAction)
	});
	it('should create an action to sort by created', () => {
		const text = ''
		const expectedAction = {
			type: constants.SORT_BY_CREATED,
			text
		}
		expect(actions.sortByCreated(text)).toEqual(expectedAction)
	});
})
