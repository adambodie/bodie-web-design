app.factory('pictureService', function($resource) {
  return $resource('static/data/pictures.json');
});
