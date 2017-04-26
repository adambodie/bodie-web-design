app.controller('PictureWeekController', ['$scope', 'NgMap', 'pictureService', function($scope, NgMap, pictureService) {

    $scope.pictures = pictureService.query(function(data) {
		$scope.length = data.length;
		$scope.data = data[$scope.length - 1];
		$scope.title = $scope.data.title;  
		$scope.place = $scope.data.location + ", " + $scope.data.state;
		$scope.image = $scope.data.image;
		$scope.week = $scope.data.week;
		
		NgMap.getMap().then(function(map) {
			$scope.latitude = $scope.data.coordinates.lat;
			$scope.longitude = $scope.data.coordinates.lng;
		});
		
  });

  }]);
