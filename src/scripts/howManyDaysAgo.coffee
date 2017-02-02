howManyDaysAgo = (years, months, days, current) ->
  if current == undefined
    current = new Date
  update = new Date
  update.setFullYear Number.parseInt(years), Number.parseInt(months), Number.parseInt(days)
  daysAgo = (current.getTime() - update.getTime()) / 86400000
  if daysAgo > 365
    yearsAgo = daysAgo / 365
    if daysAgo <= 729
      ago = ' year ago.'
    else
      ago = ' years ago.'
    return Math.floor(yearsAgo) + ago
  if daysAgo > 31
    monthsAgo = daysAgo / 31
    if daysAgo <= 60
      ago = ' month ago.'
    else
      ago = ' months ago.'
    return Math.floor(monthsAgo) + ago
  if daysAgo > 7
    weeksAgo = daysAgo / 7
    if daysAgo <= 13
      ago = ' week ago.'
    else
      ago = ' weeks ago.'
    return Math.round(weeksAgo) + ago
  if daysAgo >= 2
    ago = ' days ago.'
    return Math.round(daysAgo) + ago
  if daysAgo > 0 and daysAgo <= 1
    ago = ' day ago.'
    return Math.round(daysAgo) + ago
  if daysAgo < 1
    ago = ' days ago.'
    return 'Today'
  if daysAgo < 0
    return undefined
  return

setDate = (years, months, days) ->
  update = new Date
  update.setFullYear Number.parseInt(years), Number.parseInt(months), Number.parseInt(days)
  update.toDateString()
