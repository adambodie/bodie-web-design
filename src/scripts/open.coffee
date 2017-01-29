thanksgivingDate = (year) ->
	november = new Date(year, 10, 1)
	if november.getDay() is 4
		return november.getDate() + 21
	else
		if november.getDay() is 5 or november.getDay() is 6
			moveToThursday = 11 - november.getDay()
	 else
			moveToThursday = 4 - november.getDay()

	return november.getDate() + moveToThursday + 21

memorialDate = (year) ->
	may = new Date(year, 4, 1)
	if may.getDay() is 1
		return may.getDate() + 28
	else
		if may.getDay() is 0
			moveToMonday = 1 + may.getDay();
			return may.getDate() + moveToMonday + 28;
		else if may.getDay() is 6
			moveToMonday = 8 - may.getDay();
			return may.getDate() + moveToMonday + 28
		else
			moveToMonday = 8 - may.getDay()
			return may.getDate() + moveToMonday + 21

laborDate = (year) ->
	sept = new Date(year, 8, 1)
	if sept.getDay() is 1
		return sept.getDate()
	else
		if sept.getDay() is 0
			moveToMonday = 1 + sept.getDay()
			return sept.getDate() + moveToMonday
		else
			moveToMonday = 8 - sept.getDay()
			return sept.getDate() + moveToMonday

open = (year, month, day, week, hour) ->
	date = new Date()
	if year is undefined
		yearDate = date.getFullYear()
	if month is undefined
		monthDate = date.getMonth()
	if day is undefined
		dayDate = date.getDate()
	if week is undefined
		weekDate = date.getDay()
	if hour is undefined
		hourDate = date.getHours()

	newyear = new Date(year, 0, 1)
	independence = new Date(year, 6, 4)
	christmas = new Date(year, 11, 25)
	thanksgiving = new Date(year, 10, thanksgivingDate(year))

	if month is 0 and day is 1
		return "Today is New Year's Day.  I'm enjoying my time off."
	if month is 6 and day is 4
		return "Today is Independence Day.  I'm enjoying my time off."
	if month is 11 and day is 25
		return "Today is Christmas.  I'm enjoying my time off."
	if month is 10 and day is thansgivingDate(year)
		return "Today is Thanksgiving. I'm enjoying my time off."

	if week is 0 or week is 6
		return "Hello, it's the weekend.  If you must talk, I'm available upon request.  Otherwise, I'm not available at this time."
  if hour >= 7 and hour <= 19
	  return "Hello, I'm available to talk.  My hours are from 7:00AM - 8:00PM.";
  else
	  return "Sorry, but I'm not available to talk.  My hours are from 7:00AM - 8:00PM."
