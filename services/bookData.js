app.factory('bookData', function($http){
  var factory = {};
  factory.getBooks = function(){
    return $http.get('data/fullBookListings.json');
  };
  return factory;
});
