function howManyDaysAgo (years, months, days, current) {
	if (current === undefined) {
		current = new Date();
	}
    var update = new Date();
    update.setFullYear(Number.parseInt(years), Number.parseInt(months), Number.parseInt(days));
    var daysAgo = (current.getTime() - update.getTime())/86400000;
		if (daysAgo >= -1) {
		    if (daysAgo > 365) {
				var yearsAgo = daysAgo / 365;
				var ago = (daysAgo <= 729) ? " year ago." : " years ago.";
		    	return Math.floor(yearsAgo) + ago;
		    }

		    if (daysAgo > 31) {
				var monthsAgo = daysAgo / 31;
				var ago = (daysAgo <= 60) ? " month ago." : " months ago.";
		    	return Math.floor(monthsAgo) + ago;
		    }

		    if (daysAgo > 7) {
				var weeksAgo = daysAgo / 7;
				var ago = (daysAgo <= 13) ? " week ago." : " weeks ago.";
		    	return Math.round(weeksAgo) + ago;
		    }
		    if (daysAgo >= 2) {
		      var ago = " days ago.";
		      return Math.round(daysAgo) + ago;
		    }
		    if (daysAgo <=1 && daysAgo > 0) {
		        var ago = " day ago.";
		        return Math.round(daysAgo) + ago;
		    }
		    if (Math.floor(daysAgo) <= -1) {
				  var ago = " days ago.";
		      return "Today";
		    }
		} else {
        return undefined;
    };
}
function setDate (years, months, days) {
    var update = new Date();
    update.setFullYear(Number.parseInt(years), Number.parseInt(months), Number.parseInt(days));
    return update.toDateString();
}

module.exports = howManyDaysAgo;
