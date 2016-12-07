app.factory('historyData', function($http){
  var factory = {};
  factory.getBookHistory = function(){
    return $http.get('data/selectionHistory.json');
  };
  return factory;
});
