"use strict";

app.controller("LocationCtrl", function($scope, $routeParams, LocationFactory, $location){

    $scope.loadLocationData = () => {
        LocationFactory.getLocationData()
        .then( (response) => {
            console.log("response:", response);
            $scope.locations = response.data;
        });
    };


});