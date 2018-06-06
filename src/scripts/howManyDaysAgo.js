howManyDaysAgo = (years, months, days, current = new Date()) => {
    let update = new Date();
    update.setFullYear(Number.parseInt(years), Number.parseInt(months), Number.parseInt(days));
    let daysAgo = (current.getTime() - update.getTime())/86400000;
		if (daysAgo >= -1) {
		    if (daysAgo > 365) {
				let yearsAgo = daysAgo / 365;
				let ago = (daysAgo <= 729) ? " year ago." : " years ago.";
		    	return Math.floor(yearsAgo) + ago;
		    }

		    if (daysAgo > 31) {
				let monthsAgo = daysAgo / 31;
				let ago = (daysAgo <= 60) ? " month ago." : " months ago.";
		    	return Math.floor(monthsAgo) + ago;
		    }

		    if (daysAgo > 7) {
				let weeksAgo = daysAgo / 7;
				let ago = (daysAgo <= 13) ? " week ago." : " weeks ago.";
		    	return Math.round(weeksAgo) + ago;
		    }
		    if (daysAgo >= 2) {
		      let ago = " days ago.";
		      return Math.round(daysAgo) + ago;
		    }
		    if (daysAgo <=1 && daysAgo > 0) {
		        let ago = " day ago.";
		        return Math.round(daysAgo) + ago;
		    }
		    if (Math.floor(daysAgo) <= -1) {
				  let ago = " days ago.";
		      return "Today";
		    }
		} else {
        return undefined;
    };
}
setDate = (years, months, days) => {
    let update = new Date();
    update.setFullYear(Number.parseInt(years), Number.parseInt(months), Number.parseInt(days));
    return update.toDateString();
}

module.exports = howManyDaysAgo;
