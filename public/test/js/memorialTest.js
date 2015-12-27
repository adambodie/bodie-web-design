QUnit.test("Memorial Day Date", function (assert) {
    		assert.equal(memorialDate(2015), "25", "May 25, 2015 is Memorial Day.");
    		assert.equal(memorialDate(2014), "26", "May 26, 2014 is Memorial Day.");
    		assert.equal(memorialDate(2013), "27", "May 27, 2013 is Memorial Day.");
    		assert.equal(memorialDate(2012), "28", "May 28, 2012 is Memorial Day.");
    		assert.equal(memorialDate(2011), "30", "May 30, 2011 is Memorial Day.");
    		assert.equal(memorialDate(2010), "31", "May 31, 2010 is Memorial Day.");
    		assert.equal(memorialDate(2009), "25", "May 25, 2009 is Memorial Day.");
    		assert.equal(memorialDate(2008), "26", "May 26, 2008 is Memorial Day.");
    });  