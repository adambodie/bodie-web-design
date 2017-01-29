var expect = require('chai').expect;
describe('labor day date', function (){
	var laborDate = require('../src/scripts/open.js').laborDate;
	it ('should calculate which date of the year is Labor Day', function () {
		expect(laborDate(2016)).to.equal(5);
	});
});

describe('memorial day date', function (){
	var memorialDate = require('../src/scripts/open.js').memorialDate;
	it ('should calculate which date of the year is Memorial Day', function () {
		expect(memorialDate(2015)).to.equal(25);
	});
});

describe('thanksgiving date', function (){
	var thanksgivingDate = require('../src/scripts/open.js').thanksgivingDate;
	it ('should calculate which date of the year is Thanksgiving', function () {
		expect(thanksgivingDate(2015)).to.equal(26);
	});
});
