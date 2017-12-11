
app.controller('UpdateController', ['$scope', function($scope) {
    $scope.updates = [
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
			},
      {
  			title: "N.A.D.M. 2 - The Infamous",
  			description: "Launched September 4, 2017, built with Angular 2"
  		},
      {
  			title: "Adam's Art Showcase",
  			description: "Launched version 2.0 May 29, 2017, built with React"
  		},
      {
        title: "Adam Hits the Big 3-0",
        description: "Launched version 2.0 May 14, 2017, built with Ember"
      }
    ]
  }]);
