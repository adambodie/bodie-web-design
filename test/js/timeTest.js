QUnit.test("How Many Days Ago", function (assert) {        
		  var now = new Date();
		  now.setFullYear(2015, 8, 23);
		  assert.equal(howManyDaysAgo(2013, 6, 23, now), "2 years ago.", "The value is 2 years ago.");
        assert.equal(howManyDaysAgo(2014, 6, 23, now), "1 year ago.", "The value is 1 year ago.");
        assert.equal(howManyDaysAgo(2015, 6, 22, now), "2 months ago.", "The value is 2 months ago.");
        assert.equal(howManyDaysAgo(2015, 7, 12, now), "1 month ago.", "The value is 1 month ago.");
        assert.equal(howManyDaysAgo(2015, 7, 25, now), "4 weeks ago.", "The value is 4 weeks ago."); 
        assert.equal(howManyDaysAgo(2015, 8, 8, now), "2 weeks ago.", "The value is 2 weeks ago.");    
        assert.equal(howManyDaysAgo(2015, 8, 17, now), "6 days ago.", "The value is 6 days ago.");    
        assert.equal(howManyDaysAgo(2015, 8, 20, now), "3 days ago.", "The value is 3 days ago.");      
        assert.equal(howManyDaysAgo(2015, 8, 22, now), "1 day ago.", "The value is 1 day ago.");      
        assert.equal(howManyDaysAgo(2015, 10, 12, now), undefined, "The value is undefined.");
    });    