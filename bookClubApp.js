var app = angular.module('bookClubApp',["ngRoute","ui.bootstrap"]);
app.config(function($routeProvider){
  $routeProvider
  .when("/",{
    templateUrl: "templates/bookHome.html",
    controller:"bookController"
  })
  .when("/history",{
    templateUrl: "templates/historyHome.html",
    controller: "historyController"
  })
  .when("/next",{
    templateUrl:"templates/meetingHome.html"
  });
});
