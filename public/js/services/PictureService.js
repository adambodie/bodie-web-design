app.service("pictureService", function($http, $q) {
  var deferred = $q.defer();
  $http.get('static/data/pictures.json').then(function(response) {
    deferred.resolve(response.data);
  });

  this.getPictures = function() {
    return deferred.promise;
  }
})
