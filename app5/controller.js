angular.module("apiApp").controller("mainCtrl", function($scope, mainService){
  $scope.ships = mainService.getShipInfo().then(function(ships){
    $scope.ships = ships;
  });

});
