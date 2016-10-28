angular.module("myApp").controller("mainCtrl", function($scope, mainService){

$scope.employees = mainService.getEmployees();

});
