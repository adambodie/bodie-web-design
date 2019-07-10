import { howManyDaysAgo } from '../store/constants/howManyDaysAgo';

describe('howManyDaysAgo', () => {
	it('should return the correct info', () => {
		expect(howManyDaysAgo(2015, 0, 1)).toEqual('4 years ago.')
	});
	it('should return the correct info', () => {
		expect(howManyDaysAgo(2018, 0, 1)).toEqual('1 year ago.')
	});
	it('should return the correct info', () => {
		let current = new Date(2018, 0, 2, 0, 0, 0)
		expect(howManyDaysAgo(2018, 0, 1, current)).toEqual('Yesterday.')
	});
})
