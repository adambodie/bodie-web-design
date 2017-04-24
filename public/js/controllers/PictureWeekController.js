app.controller('PictureWeekController', ['$scope', 'NgMap', function($scope, NgMap) {

  $scope.title = 'I Love Science';
  $scope.dateTaken = 'July 17, 2008';
  $scope.place = 'Portland, Oregon';
  $scope.image = 'science';
  NgMap.getMap().then(function(map) {
    $scope.location = 'OMSI';
    $scope.latitude = 45.508741;
    $scope.longitude = -122.6684867;
  });
  }]);
