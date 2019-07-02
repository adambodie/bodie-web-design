export const howManyDaysAgo = (years, months, days) => {
	let update = new Date(Number.parseInt(years), Number.parseInt(months), Number.parseInt(days), 0, 0, 0);
	let current = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0)
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
		if (daysAgo === 1) {
			return "Yesterday.";
		}
		if (daysAgo === 0) {
			return "Today.";
		}
	} else {
		  return undefined;
	};
}
