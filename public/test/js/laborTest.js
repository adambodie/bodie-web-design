QUnit.test("Labor Day", function (assert) {
    		assert.equal(laborDate(2015), "7", "September 7, 2015 is Labor Day.");
    		assert.equal(laborDate(2014), "1", "September 1, 2014 is Labor Day.");
    		assert.equal(laborDate(2013), "2", "September 2, 2013 is Labor Day.");
    		assert.equal(laborDate(2012), "3", "September 3, 2012 is Labor Day.");
    		assert.equal(laborDate(2011), "5", "September 5, 2011 is Labor Day.");
    		assert.equal(laborDate(2010), "6", "September 6, 2010 is Labor Day.");
    		assert.equal(laborDate(2009), "7", "September 7, 2009 is Labor Day.");
    		assert.equal(laborDate(2008), "1", "September 1, 2008 is Labor Day.");
    });  