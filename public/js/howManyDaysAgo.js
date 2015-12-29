function howManyDaysAgo (years, months, days, current) {
	if (current === undefined) {
		current = new Date();
	}    
    var update = new Date();
    update.setFullYear(Number.parseInt(years), Number.parseInt(months), Number.parseInt(days));
    var daysAgo = (current.getTime() - update.getTime())/86400000;    
    if (daysAgo > 365) {
    	var yearsAgo = daysAgo / 365;
    	if (daysAgo <= 729) {
    		var ago = " year ago.";
    	} else {
    		var ago = " years ago.";	
    	}
    	return Math.floor(yearsAgo) + ago;
    }
    
    if (daysAgo > 31) {
    	var monthsAgo = daysAgo / 31;
    	if (daysAgo <= 60) {
    		var ago = " month ago.";
    	} else {
    		var ago = " months ago.";	
    	}
    	return Math.floor(monthsAgo) + ago;
    }
    
    if (daysAgo > 7) {
    	var weeksAgo = daysAgo / 7;
    	if (daysAgo <= 13) {
    		var ago = " week ago.";
    	} else {
    		var ago = " weeks ago.";	
    	}
    	return Math.round(weeksAgo) + ago;
    }
    if (daysAgo >= 2) {    
      var ago = " days ago.";
      return Math.round(daysAgo) + ago;
    } 
    if (daysAgo > 0 && daysAgo <=1) {
        var ago = " day ago.";
        return Math.round(daysAgo) + ago;
    }
    if (daysAgo == 0) {
		  var ago = " days ago.";
        return Math.round(daysAgo) + ago;     
    } 
    if (daysAgo < 0) {
        return undefined;
    }
};

function setDate (years, months, days) {
    var update = new Date();
    update.setFullYear(Number.parseInt(years), Number.parseInt(months), Number.parseInt(days));
    return update.toDateString();
}