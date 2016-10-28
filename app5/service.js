angular.module("apiApp").service("mainService", function($http){

  this.getShipInfo = function(){
    var baseurl = "http://swapi.co/api";
    return $http({
      method: "GET",
      url: baseurl + "/starships/"
    }).then(function(response){
      if(response.status === 200){
      return response.data.results;
    }
    return "The Death Star blew up our request."
    });

  };

});
