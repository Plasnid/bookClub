app.directive("historyBookDirective",function(){
  return {
    restrict:"E",
    templateUrl:"templates/historyBookTemplate.html",
    scope: '&',
    controller: function($scope){
      $scope.showBookInfo = function(title, firstName, lastName){
        console.log("borkety bork: "+title+": "+firstName+" "+lastName);
        //$scope.bookDataCheck();
      };
    }
  };
});
