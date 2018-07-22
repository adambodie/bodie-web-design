export const howManyDaysAgo = (years, months, days, current) => {
	let update = new Date();
	update.setFullYear(Number.parseInt(years), Number.parseInt(months), Number.parseInt(days));
	update.setHours(0);
	update.setMinutes(0);
	update.setSeconds(0);
	current.setHours(0);
	current.setMinutes(0);
	current.setSeconds(0);
	let daysAgo = Math.round((current.getTime() - update.getTime())/86400000);
	  
	if (daysAgo >= -1) {
		if (daysAgo > 365) {
			let yearsAgo = daysAgo / 365;
			let ago = (daysAgo <= 729) ? " year ago." : " years ago.";
			return Math.floor(yearsAgo) + ago;
		}

		if (daysAgo >= 30) {
			let monthsAgo = Math.round(daysAgo / 30);
			let ago = (daysAgo <= 60) ? " month ago." : " months ago.";
			return Math.round(monthsAgo) + ago;
		}

		if (daysAgo >= 7) {
			let weeksAgo = Math.round(daysAgo / 7);
			let ago = (daysAgo < 14) ? " week ago." : " weeks ago.";
			return weeksAgo + ago;
		}
		
		if (daysAgo >= 2) {
			let ago = " days ago.";
			return daysAgo + ago;
		}
		
		if (daysAgo == 1) {
			return "Yesterday.";
		}
		
		if (daysAgo == 0) {
			return "Today.";
		}
		
	  } else {
		  return undefined;
	  };
}

