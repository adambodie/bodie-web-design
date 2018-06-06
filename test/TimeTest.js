const expect = require('chai').expect;

describe('how many days ago from update to creation', () => {
const howManyDaysAgo = require('../src/scripts/howManyDaysAgo.js');
const now = new Date();
now.setFullYear(2015, 8, 23);
	it ('should calculate two years', () =>  {
		expect(howManyDaysAgo(2013, 6, 23, now)).to.equal("2 years ago.");
	});
  it ('should calculate one year', () =>  {
		expect(howManyDaysAgo(2014, 6, 23, now)).to.equal("1 year ago.");
	});
  it ('should calculate two months ago', () =>  {
		expect(howManyDaysAgo(2015, 6, 22, now)).to.equal("2 months ago.");
	});
  it ('should calculate one month ago', () =>  {
		expect(howManyDaysAgo(2015, 7, 12, now)).to.equal("1 month ago.");
	});
  it ('should calculate four weeks ago', () =>  {
		expect(howManyDaysAgo(2015, 7, 25, now)).to.equal("4 weeks ago.");
	});
  it ('should calculate two weeks ago', () =>  {
		expect(howManyDaysAgo(2015, 8, 8, now)).to.equal("2 weeks ago.");
	});
  it ('should calculate six days ago', () =>  {
		expect(howManyDaysAgo(2015, 8, 17, now)).to.equal("6 days ago.");
	});
  it ('should calculate three days ago', () =>  {
		expect(howManyDaysAgo(2015, 8, 20, now)).to.equal("3 days ago.");
	});
  it ('should calculate one day ago', () =>  {
		expect(howManyDaysAgo(2015, 8, 22, now)).to.equal("1 day ago.");
	});
  it ('should calculate Today', () =>  {
		expect(howManyDaysAgo(2015, 8, 23, now)).to.equal("Today");
	});
  it ('should calculate undefined', () =>  {
		expect(howManyDaysAgo(2015, 8, 24, now)).to.equal(undefined);
	});
});
