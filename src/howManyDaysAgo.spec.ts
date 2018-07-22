import { howManyDaysAgo } from './howManyDaysAgo';

describe("How Many Days Ago", function() {
  it("should return 3 years ago", function() {
	let date = new Date("July 4, 2018");
    expect(howManyDaysAgo(2015, 0, 1, date)).toBe("3 years ago.");
  });
  it("should return 2 years ago", function() {
    let date = new Date("July 4, 2018");
    let testDate = new Date("January 1, 2016");
    expect(howManyDaysAgo(testDate.getFullYear(), testDate.getMonth(), testDate.getDate(), date)).toBe("2 years ago.");
  });
  
  it("should return 1 year ago", function() {
    let date = new Date("July 4, 2018");
    let testDate = new Date("January 1, 2017");
    expect(howManyDaysAgo(testDate.getFullYear(), testDate.getMonth(), testDate.getDate(), date)).toBe("1 year ago.");
  });
  
  it("should return 12 months ago", function() {
    let date = new Date("December 31, 2017");
    let testDate = new Date("January 1, 2017");
    expect(howManyDaysAgo(testDate.getFullYear(), testDate.getMonth(), testDate.getDate(), date)).toBe("12 months ago.");
  });  
  
  it("should return 5 months ago", function() {
    let date = new Date("June 1, 2018");
    let testDate = new Date("January 1, 2018");
    expect(howManyDaysAgo(testDate.getFullYear(), testDate.getMonth(), testDate.getDate(), date)).toBe("5 months ago.");
  });
 
   it("should return 1 month ago", function() {
    let date = new Date("January 31, 2018");
    let testDate = new Date("January 1, 2018");
    expect(howManyDaysAgo(testDate.getFullYear(), testDate.getMonth(), testDate.getDate(), date)).toBe("1 month ago.");
  });

   it("should return 4 weeks ago", function() {
    let date = new Date("January 30, 2018");
    let testDate = new Date("January 1, 2018");
    expect(howManyDaysAgo(testDate.getFullYear(), testDate.getMonth(), testDate.getDate(), date)).toBe("4 weeks ago.");
  });
  
  it("should return 2 weeks ago", function() {
    let date = new Date("July 21, 2018");
    let testDate = new Date("July 7, 2018");
    expect(howManyDaysAgo(testDate.getFullYear(), testDate.getMonth(), testDate.getDate(), date)).toBe("2 weeks ago.");
  });

  it("should return 1 week ago", function() {
    let date = new Date("July 14, 2018");
    let testDate = new Date("July 7, 2018");
    expect(howManyDaysAgo(testDate.getFullYear(), testDate.getMonth(), testDate.getDate(), date)).toBe("1 week ago.");
  });

  it("should return 6 days ago", function() {
    let date = new Date("July 11, 2018");
    let testDate = new Date("July 5, 2018");
    expect(howManyDaysAgo(testDate.getFullYear(), testDate.getMonth(), testDate.getDate(), date)).toBe("6 days ago.");
  });
    it("should return 2 days ago", function() {
    let date = new Date("July 8, 2018");
    let testDate = new Date("July 6, 2018");
    expect(howManyDaysAgo(testDate.getFullYear(), testDate.getMonth(), testDate.getDate(), date)).toBe("2 days ago.");
  });

   it("should return 1 day ago", function() {
    let date = new Date("July 8, 2018");
    let testDate = new Date("July 7, 2018");
    expect(howManyDaysAgo(testDate.getFullYear(), testDate.getMonth(), testDate.getDate(), date)).toBe("Yesterday.");
  });
  
   it("should return Today", function() {
    let date = new Date("July 8, 2018");
    let testDate = new Date("July 8, 2018");
    expect(howManyDaysAgo(testDate.getFullYear(), testDate.getMonth(), testDate.getDate(), date)).toBe("Today.");
  }); 

   
});
