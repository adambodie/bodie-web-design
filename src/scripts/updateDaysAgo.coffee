date = [
  {
    name: 'Adam Hits the Big 3-0'
    id: 'daysAgo1'
    year: 2015
    month: 6
    day: 11
    updateId: 'updateDaysAgo1'
    updateYear: 2015
    updateMonth: 9
    updateDay: 9
  }
  {
    name: 'Great Breweries in Oregon'
    id: 'daysAgo2'
    year: 2015
    month: 6
    day: 11
    updateId: 'updateDaysAgo2'
    updateYear: 2015
    updateMonth: 6
    updateDay: 11
  }
  {
    name: 'Visit Ashland, Oregon'
    id: 'daysAgo3'
    year: 2015
    month: 6
    day: 12
    updateId: 'updateDaysAgo3'
    updateYear: 2017
    updateMonth: 0
    updateDay: 2
  }
  {
    name: 'Read Your Fortune Cookie'
    id: 'daysAgo4'
    year: 2015
    month: 6
    day: 17
    updateId: 'updateDaysAgo4'
    updateYear: 2015
    updateMonth: 10
    updateDay: 11
  }
  {
    name: 'Duck vs. Blue Hen!'
    id: 'daysAgo5'
    year: 2015
    month: 6
    day: 25
    updateId: 'updateDaysAgo5'
    updateYear: 2017
    updateMonth: 0
    updateDay: 8
  }
  {
    name: 'Great Small Towns'
    id: 'daysAgo6'
    year: 2015
    month: 8
    day: 7
    updateId: 'updateDaysAgo6'
    updateYear: 2016
    updateMonth: 7
    updateDay: 28
  }
  {
    name: 'Adam\'s Wonderful World of Waterfalls'
    id: 'daysAgo7'
    year: 2016
    month: 2
    day: 13
    updateId: 'updateDaysAgo7'
    updateYear: 2017
    updateMonth: 0
    updateDay: 11
  }
  {
    name: 'Adam\'s Wonderful Wild Weekend in Walla Walla Washington'
    id: 'daysAgo8'
    year: 2016
    month: 2
    day: 24
    updateId: 'updateDaysAgo8'
    updateYear: 2016
    updateMonth: 2
    updateDay: 24
  }
  {
    name: 'Adam\'s Art Showcase'
    id: 'daysAgo9'
    year: 2016
    month: 3
    day: 16
    updateId: 'updateDaysAgo9'
    updateYear: 2016
    updateMonth: 3
    updateDay: 16
  }
  {
    name: 'Overview of the Nama Language'
    id: 'daysAgo10'
    year: 2016
    month: 6
    day: 17
    updateId: 'updateDaysAgo10'
    updateYear: 2016
    updateMonth: 6
    updateDay: 17
  }
  {
    name: 'Reno Nice \'n\' Cool: A Better RNC'
    id: 'daysAgo11'
    year: 2016
    month: 7
    day: 5
    updateId: 'updateDaysAgo11'
    updateYear: 2016
    updateMonth: 7
    updateDay: 5
  }
  {
    name: 'Dreidel Duel'
    id: 'daysAgo12'
    year: 2017
    month: 0
    day: 15
    updateId: 'updateDaysAgo12'
    updateYear: 2017
    updateMonth: 0
    updateDay: 22
  }
  {
    name: 'Coen Brothers Film Review'
    id: 'daysAgo13'
    year: 2017
    month: 1
    day: 9
    updateId: 'updateDaysAgo13'
    updateYear: 2017
    updateMonth: 1
    updateDay: 9
  }
  {
    name: 'Florence Foundation'
    id: 'daysAgo14'
    year: 2017
    month: 1
    day: 19
    updateId: 'updateDaysAgo14'
    updateYear: 2017
    updateMonth: 1
    updateDay: 19
  }
  {
    name: 'NFL Passer Rating'
    id: 'daysAgo15'
    year: 2017
    month: 3
    day: 2
    updateId: 'updateDaysAgo15'
    updateYear: 2017
    updateMonth: 3
    updateDay: 2
  }
]
current = new Date
updated = new Date
i = 0
while i < date.length
  diff = howManyDaysAgo(date[i]['year'], date[i]['month'], date[i]['day'], current)
  original = setDate(date[i]['year'], date[i]['month'], date[i]['day'])
  document.getElementById(date[i]['id']).innerHTML = '<strong>Created: </strong>' + original + '.<br><strong>Added</strong> ' + diff
  updateDiff = howManyDaysAgo(date[i]['updateYear'], date[i]['updateMonth'], date[i]['updateDay'], current)
  updateOriginal = setDate(date[i]['updateYear'], date[i]['updateMonth'], date[i]['updateDay'])
  document.getElementById(date[i]['updateId']).innerHTML = '<strong>Updated:</strong> ' + updateOriginal + '.<br><strong>Last updated</strong> ' + updateDiff
  i++
