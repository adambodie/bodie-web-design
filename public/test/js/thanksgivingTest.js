QUnit.test("Thanksgiving Date", function (assert) {
    		assert.equal(thanksgivingDate(2015), "26", "November 26, 2015 is Thanksgiving.");
    		assert.equal(thanksgivingDate(2014), "27", "November 27, 2014 is Thanksgiving.");
    		assert.equal(thanksgivingDate(2013), "28", "November 28, 2013 is Thanksgiving.");
    		assert.equal(thanksgivingDate(2012), "22", "November 22, 2012 is Thanksgiving.");
    		assert.equal(thanksgivingDate(2011), "24", "November 24, 2011 is Thanksgiving.");
    		assert.equal(thanksgivingDate(2010), "25", "November 25, 2010 is Thanksgiving.");
    		assert.equal(thanksgivingDate(2009), "26", "November 26, 2009 is Thanksgiving.");
    		assert.equal(thanksgivingDate(2008), "27", "November 27, 2008 is Thanksgiving.");
    });  