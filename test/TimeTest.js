var expect = require('chai').expect;

describe('how many days ago from update to creation', function (){
var howManyDaysAgo = require('../src/scripts/howManyDaysAgo.js');
var now = new Date();
now.setFullYear(2015, 8, 23);
	it ('should calculate two years', function () {
		expect(howManyDaysAgo(2013, 6, 23, now)).to.equal("2 years ago.");
	});
  it ('should calculate one year', function () {
		expect(howManyDaysAgo(2014, 6, 23, now)).to.equal("1 year ago.");
	});
  it ('should calculate two months ago', function () {
		expect(howManyDaysAgo(2015, 6, 22, now)).to.equal("2 months ago.");
	});
  it ('should calculate one month ago', function () {
		expect(howManyDaysAgo(2015, 7, 12, now)).to.equal("1 month ago.");
	});
  it ('should calculate four weeks ago', function () {
		expect(howManyDaysAgo(2015, 7, 25, now)).to.equal("4 weeks ago.");
	});
  it ('should calculate two weeks ago', function () {
		expect(howManyDaysAgo(2015, 8, 8, now)).to.equal("2 weeks ago.");
	});
  it ('should calculate six days ago', function () {
		expect(howManyDaysAgo(2015, 8, 17, now)).to.equal("6 days ago.");
	});
  it ('should calculate three days ago', function () {
		expect(howManyDaysAgo(2015, 8, 20, now)).to.equal("3 days ago.");
	});
  it ('should calculate one day ago', function () {
		expect(howManyDaysAgo(2015, 8, 22, now)).to.equal("1 day ago.");
	});
  it ('should calculate Today', function () {
		expect(howManyDaysAgo(2015, 8, 23, now)).to.equal("Today");
	});
  it ('should calculate undefined', function () {
		expect(howManyDaysAgo(2015, 8, 24, now)).to.equal(undefined);
	});
});
