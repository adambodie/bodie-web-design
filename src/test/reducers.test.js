import { sortByCreated } from '../store/reducers/created';
import { sortByUpdated } from '../store/reducers/updated';
import { sortByTitle } from '../store/reducers/title';
import { filterList } from '../store/reducers/filter';
import * as types from '../store/constants/';

describe('sortByCreated reducer', () => {
	it('should handle SORT_BY_CREATED', () => {
		expect(
			sortByCreated({ createdOrder: 'Newest', createdCount: 0 }, {
				type: types.SORT_BY_CREATED,
				text: ''
			})
		).toEqual(
			{ createdOrder: 'Oldest', createdCount: 1 }
		)
	})
})

describe('sortByUpdated reducer', () => {
	it('should handle SORT_BY_UPDATED', () => {
		expect(
			sortByUpdated({ updatedOrder: 'Newest', updatedCount: 0 }, {
				type: types.SORT_BY_UPDATED,
				text: ''
			})
		).toEqual(
			{ updatedOrder: 'Oldest', updatedCount: 1 }
		)
	})
})

describe('sortByTitle reducer', () => {
	it('should handle SORT_BY_TITLE', () => {
		expect(
			sortByTitle({ titleOrder: '', titleCount: 0 }, {
				type: types.SORT_BY_TITLE,
				text: ''
			})
		).toEqual(
			{ titleOrder: 'A-Z', titleCount: 1 }
		)
	})
})

describe('filterList reducer', () => {
	it('should handle COUNTER', () => {
		expect(filterList(10 , {type: types.COUNTER, text: 'React' })).toEqual(6)
	})
	it('should handle RESET', () => {
		expect(filterList(0 , {type: types.RESET, text: ''})).toEqual(10)
	})
})
