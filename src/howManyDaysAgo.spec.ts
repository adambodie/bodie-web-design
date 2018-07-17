import { howManyDaysAgo } from './howManyDaysAgo';

describe("How Many Days Ago", function() {
  it("should return 3 years ago", function() {
	let date = new Date("July 4, 2018");
    expect(howManyDaysAgo(2015, 0, 1, date)).toBe("3 years ago.");
  });
  it("should return 2 years ago", function() {
    let date = new Date("July 4, 2018");
    expect(howManyDaysAgo(2016, 0, 1, date)).toBe("2 years ago.");
  });
  
  it("should return 1 year ago", function() {
    let date = new Date("July 4, 2018");
    expect(howManyDaysAgo(2017, 0, 1, date)).toBe("1 year ago.");
  });
  
  it("should return 5 months ago", function() {
    let date = new Date("July 4, 2018");
    expect(howManyDaysAgo(2018, 0, 1, date)).toBe("5 months ago.");
  });
  
  it("should return 3 weeks ago", function() {
    let date = new Date("July 1, 2018");
    expect(howManyDaysAgo(2018, 5, 7, date)).toBe("3 weeks ago.");
  });

  it("should return 3 days ago", function() {
    let date = new Date("July 8, 2018");
    expect(howManyDaysAgo(2018, 6, 4, date)).toBe("3 days ago.");
  });
    it("should return 2 days ago", function() {
    let date = new Date("July 8, 2018");
    expect(howManyDaysAgo(2018, 6, 5, date)).toBe("2 days ago.");
  });
	// this test fails
   it("should return 1 day ago", function() {
    let date = new Date("July 8, 2018");
    expect(howManyDaysAgo(2018, 6, 6, date)).toBe("1 day ago.");
  });
   
});
