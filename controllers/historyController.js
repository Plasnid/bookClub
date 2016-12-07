app.controller("historyController", function($scope, historyData){
  function init(){
    historyData.getBookHistory().success(function(data, status){
      $scope.bookHistory = data;
    });
  };
  function bookDataCheck(){
    console.log("berty bert");
  }
  init();
});
