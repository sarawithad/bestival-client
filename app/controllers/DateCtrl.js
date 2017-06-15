"use strict";

app.controller("DateCtrl", function($scope, $routeParams, DateFactory, $location){

    $scope.loadDateData = () => {
        DateFactory.getDateData()
        .then( (response) => {
            console.log("response:", response);
            $scope.dates = response.data;
        });
    };


});