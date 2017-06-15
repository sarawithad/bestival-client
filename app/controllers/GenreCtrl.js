"use strict";

app.controller("GenreCtrl", function($scope, $routeParams, GenreFactory, $location){

    $scope.loadGenreData = () => {
        GenreFactory.getGenreData()
        .then( (response) => {
            console.log("response:", response);
            $scope.genres = response.data;
        });
    };


});