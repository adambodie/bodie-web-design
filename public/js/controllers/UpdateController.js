
app.controller('UpdateController', ['$scope', function($scope) {
    $scope.updates = [
      {
  			title: "NFL Passer Rating",
  			description: "Reconfigured components to allow flexibility of button colors, January 7, 2018"
  		},      
      {
        title: "Dreidel Duel",
        description: "Added new feature, converted syntax to ES6, January 1, 2018"
      },       
      {
        title: "Reno Nice 'n' Cool",
        description: "Launched version 2.0 December 11, 2017, built with Vue.js"
      },      
      {
        title: "Adam's Adventures",
        description: "Launched November 23, 2017, built with React"
      },
      {
        title: "Adam's Wild Wild West",
        description: "Launched October 1, 2017, built with React"
      },
			{
				title: "Dreidel Duel!",
				description: "Moved to its own webpage September 22, 2017"
			}
    ]
  }]);
