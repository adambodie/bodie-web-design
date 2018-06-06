const expect = require('chai').expect;
describe('labor day date', () => {
	const laborDate = require('../src/scripts/open.js').laborDate;
	it ('should calculate which date of the year is Labor Day', () =>  {
		expect(laborDate(2016)).to.equal(5);
	});
});

describe('memorial day date', () => {
	const memorialDate = require('../src/scripts/open.js').memorialDate;
	it ('should calculate which date of the year is Memorial Day', () =>  {
		expect(memorialDate(2015)).to.equal(25);
	});
});

describe('thanksgiving date', () => {
	const thanksgivingDate = require('../src/scripts/open.js').thanksgivingDate;
	it ('should calculate which date of the year is Thanksgiving', () =>  {
		expect(thanksgivingDate(2015)).to.equal(26);
	});
});
