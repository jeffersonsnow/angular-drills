angular.module("arrayApp").controller("arrayController", function($scope, arrayService){
$scope.test = "this is working";
$scope.employees = arrayService.getData();

});
