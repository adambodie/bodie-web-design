
export const howManyDaysAgo = (years, months, days, current = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0)) => {
	let update = new Date(Number.parseInt(years), Number.parseInt(months), Number.parseInt(days), 0, 0, 0)
	let daysAgo = Math.round((current.getTime() - update.getTime())/86400000)
	if (daysAgo >= -1) {
		let ago = ''
		switch (true) {
			case (daysAgo > 365):
				let yearsAgo = daysAgo / 365
				ago = (daysAgo <= 729) ? ' year ago.' : ' years ago.'
				return Math.floor(yearsAgo) + ago
			case (daysAgo >= 30):
				let monthsAgo = Math.round(daysAgo / 30)
				ago = (daysAgo <= 60) ? ' month ago.' : ' months ago.'
				return Math.round(monthsAgo) + ago
			case (daysAgo >= 7):
				let weeksAgo = Math.round(daysAgo / 7)
				ago = (daysAgo < 14) ? ' week ago.' : ' weeks ago.'
				return weeksAgo + ago
			case (daysAgo >= 2):
				ago = ' days ago.'
				return daysAgo + ago
			case (daysAgo === 1):
				return 'Yesterday.'
			default:
				return 'Today.'
			}
	} else {
		  return undefined
	}
}
