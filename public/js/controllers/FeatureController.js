app.controller('FeatureController', ['$scope', function($scope) {

    $scope.features = [
      {
      	image : "grandcanyon",
      	title : "Adam Hits the Big 3-0",
      	link : "grand-canyon"
      },
      {
      	image : "ashland",
      	title : "Visit Ashland, Oregon",
      	link : "ashland"
      },
      {
      	image : "fortune",
      	title : "Read Your Fortune Cookie",
      	link : "fortune-cookie"
      },
      {
      	image : "delaware",
      	title : "Duck vs. Blue Hen!",
      	link : "battle"
      },
      {
      	image : "small",
      	title : "Great Small Towns",
      	link : "small-town"
      },
      {
      	image : "walla-walla",
      	title : "Adam's Wonderful Wild Weekend in Walla Walla Washington",
      	link : "walla-walla"
      },
      {
      	image : "artshowcase",
      	title : "Adam's Art Showcase",
      	link : "adamsartshowcase"
      },
      {
      	image : "nama",
      	title : "Overview of the Nama Language",
      	link : "nama"
      },
      {
      	image : "reno-rnc",
      	title : "Reno Nice 'n' Cool: A Better RNC",
      	link : "reno"
      },
      {
      	image : "dreidel",
      	title : "Dreidel Duel!",
      	link : "dreidel"
      },
      {
      	image : "nfl",
      	title : "NFL Passer Rating",
      	link : "nfl-passer-rating"
      },
      {
      	image : "nadm2",
      	title : "N.A.D.M. 2 - The Infamous",
      	link : "nadm2"
      },
      {
      	image : "wildwildwest",
      	title : "Adam's Wild Wild West",
      	link : "wildwildwest"
      },
      {
      	image : "adventures",
      	title : "Adam's Adventures",
      	link : "adventures"
      }
    ],

    $scope.random = Math.round(Math.random() * $scope.features.length);

    $scope.randomFeature = $scope.features[$scope.random];
}]);
