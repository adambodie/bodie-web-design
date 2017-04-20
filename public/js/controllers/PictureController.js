app.controller('PictureController', ['$scope', 'pictureService', function ($scope, pictureService) {
    var promise = pictureService.getPictures();

    promise.then(function(data) {
        $scope.data = data;
        return $scope.data;
    });

}]);
