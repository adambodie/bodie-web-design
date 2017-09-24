app.controller('PictureController', ['$scope', 'pictureService', function ($scope, pictureService) {
    $scope.pictures = pictureService.query(function(data) {
    $scope.data = data.reverse();
  });

    $scope.itemsPerPage = 9;
    $scope.currentPage = 1;

    $scope.pageCount = function () {
      return Math.ceil($scope.data.length / $scope.itemsPerPage);
    };

    $scope.pictures.$promise.then(function () {
      $scope.totalItems = $scope.data.length + 7;
      $scope.$watch('currentPage + itemsPerPage', function() {
        var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
          end = begin + $scope.itemsPerPage;

        $scope.filteredPictures = $scope.data.slice(begin, end);
      });
    });

}]);
