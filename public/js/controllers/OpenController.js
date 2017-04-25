app.controller('OpenController', ['$scope', function($scope) {
	$scope.fullDate = new Date();
	$scope.year = $scope.fullDate.getFullYear();
	$scope.month = $scope.fullDate.getMonth();
	$scope.date = $scope.fullDate.getDate(); 
	$scope.day = $scope.fullDate.getDay();
	$scope.hours = $scope.fullDate.getHours();

	var thanksgivingDate = function(year) {
	  var moveToThursday, november;
	  november = new Date(year, 10, 1);
	  if (november.getDay() === 4) {
		return november.getDate() + 21;
	  } else {
		if (november.getDay() === 5 || november.getDay() === 6) {
		  moveToThursday = 11 - november.getDay();
		} else {
		  moveToThursday = 4 - november.getDay();
		}
	  }
	  return november.getDate() + moveToThursday + 21;
	};

	var memorialDate = function(year) {
	  var may, moveToMonday;
	  may = new Date(year, 4, 1);
	  if (may.getDay() === 1) {
		return may.getDate() + 28;
	  } else {
		if (may.getDay() === 0) {
		  moveToMonday = 1 + may.getDay();
		  return may.getDate() + moveToMonday + 28;
		} else if (may.getDay() === 6) {
		  moveToMonday = 8 - may.getDay();
		  return may.getDate() + moveToMonday + 28;
		} else {
		  moveToMonday = 8 - may.getDay();
		  return may.getDate() + moveToMonday + 21;
		}
	  }
	};

	var laborDate = function(year) {
	  var moveToMonday, sept;
	  sept = new Date(year, 8, 1);
	  if (sept.getDay() === 1) {
		return sept.getDate();
	  } else {
		if (sept.getDay() === 0) {
		  moveToMonday = 1 + sept.getDay();
		  return sept.getDate() + moveToMonday;
		} else {
		  moveToMonday = 8 - sept.getDay();
		  return sept.getDate() + moveToMonday;
		}
	  }
	};

	var open = function(year, month, day, week, hour) {
	  var christmas, date, dayDate, hourDate, independence, monthDate, newyear, thanksgiving, weekDate, yearDate;
	  date = new Date();
	  if (year === void 0) {
		yearDate = date.getFullYear();
	  }
	  if (month === void 0) {
		monthDate = date.getMonth();
	  }
	  if (day === void 0) {
		dayDate = date.getDate();
	  }
	  if (week === void 0) {
		weekDate = date.getDay();
	  }
	  if (hour === void 0) {
		hourDate = date.getHours();
	  }
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
	  if (month === 10 && day === thansgivingDate(year)) {
		return "Today is Thanksgiving. I'm enjoying my time off.";
	  }
	  if (week === 0 || week === 6) {
		return"Hello, it's the weekend.  If you must talk, I'm available upon request.  Otherwise, I'm not available at this time.";
	  }
	  if (hour >= 7 && hour <= 19) {
		  return "Hello, I'm available to talk.  My hours are from 7:00AM - 8:00PM.";
	  } else {
		  return "Sorry, but I'm not available to talk.  My hours are from 7:00AM - 8:00PM.";
	  }
	};
	$scope.open = open($scope.year, $scope.month, $scope.date, $scope.day, $scope.hours);

  }]);
