app.controller('bookController',function($scope, bookData){
  init();
  function init(){
    bookData.getBooks().success(function(data, status){
      $scope.books = data;
    });
  }
  $scope.order = {
    field: 'title',
    reverse: false
  };

  $scope.reverseOrder = false;

  $scope.dynamicOrder = function(book){
    var order = 0;
    order = book[$scope.order.field];
    return order;
  }
});
