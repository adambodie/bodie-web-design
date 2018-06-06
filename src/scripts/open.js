let laborDate, memorialDate, open, thanksgivingDate;

thanksgivingDate = year => {
    let moveToThursday, november, day;
	  november = new Date(year, 10, 1);
	  day = november.getDay();
	  if (day === 4) {
	    moveToThursday = 0;
    } else if (day === 5 || day === 6) {
	    moveToThursday = 11 - day;
    } else {
	    moveToThursday = 4 - day;
    }
return november.getDate() + moveToThursday + 21;
} 


memorialDate = year => {
    let may, moveToMonday, day;
    may = new Date(year, 4, 1);
    day = may.getDay();
  	if (day === 1) {
    		moveToMonday = 8;
  	} else if (day === 0) {
      	moveToMonday = 9;
    } else if (day === 6) {
      	moveToMonday = 10;
    } else {
      		moveToMonday = 9 - day;
    	}
  return may.getDate() + moveToMonday + 20;
};

laborDate = year => {
    let moveToMonday, sept, day;
  	sept = new Date(year, 8, 1);
    day = sept.getDay();
  	if (day === 1) {
    		moveToMonday = 0;
  	} else if (day === 0) {
      	moveToMonday = 1;
    	} else {
      	moveToMonday = 8 - day;    		
    }
	  return sept.getDate() + moveToMonday;
}

open = (year, month, day, week, hour) => {
  let christmas, date, independence, newyear, thanksgiving;
  date = new Date();
  newyear = new Date(year, 0, 1);
  independence = new Date(year, 6, 4);
  christmas = new Date(year, 11, 25);
  thanksgiving = new Date(year, 10, thanksgivingDate(year));
  if (month === 0 && day === 1) {
    return "Today is New Year's Day.  I'm enjoying my time off.";
  }
  if (month === 6 && day === 4) {
    return "Today is Independence Day.  I'm enjoying my time off.";
  }
  if (month === 11 && day === 25) {
    return "Today is Christmas.  I'm enjoying my time off.";
  }
  if (month === 10 && day === thanksgivingDate(year)) {
    return "Today is Thanksgiving. I'm enjoying my time off.";
  }
  if (week === 0 || week === 6) {
    return "Hello, it's the weekend.  If you must talk, I'm available upon request.  Otherwise, I'm not available at this time.";
  }
  if (hour >= 7 && hour <= 19) {
      return "Hello, I'm available to talk.  My hours are from 7:00AM - 8:00PM.";
  } else {
      return "Sorry, but I'm not available to talk.  My hours are from 7:00AM - 8:00PM.";
  }
};

module.exports.thanksgivingDate = thanksgivingDate;

module.exports.memorialDate = memorialDate;

module.exports.laborDate = laborDate;

module.exports.open = open;
