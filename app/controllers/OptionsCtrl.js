"use strict";

app.controller("OptionsCtrl", function($scope, $routeParams, filterFilter, DataFactory, $location){

    $scope.userSelection = [];

    //gets and loads Artist data from bestival API and checks to see which artists have been selected
    $scope.loadArtistData = () => {
        DataFactory.getArtistData()
        .then( (response) => {
            console.log("response:", response);
            $scope.artists = response.data;

            $scope.$watch('artists|filter:{checked:true}', function (nv) {
                console.log("nv:", nv);
                $scope.userSelection = nv.map(function (artist) {
                  return artist.name;
                });
            }, true);
        });
    };

    $scope.artistsChecked = function artistsChecked() {
        return filterFilter($scope.artists, {checked: true});
    };

    //gets and loads Genre data from bestival API and checks to see which genres have been selected
    $scope.loadGenreData = () => {
        DataFactory.getGenreData()
        .then( (response) => {
            console.log("response:", response);
            $scope.genres = response.data;

            $scope.$watch('genres|filter:{checked:true}', function (nv) {
                console.log("nv:", nv);
                $scope.userSelection = nv.map(function (genre) {
                  return genre.name;
                });
            }, true);
        });
    };

    $scope.genresChecked = function genresChecked() {
        return filterFilter($scope.genres, {checked: true});
    };

    //gets and loads location data from bestival API and checks to see which locations have been selected
    $scope.loadLocationData = () => {
        DataFactory.getLocationData()
        .then( (response) => {
            console.log("response:", response);
            $scope.locations = response.data;

            $scope.$watch('locations|filter:{checked:true}', function (nv) {
                console.log("nv:", nv);
                $scope.userSelection = nv.map(function (location) {
                  return location.name;
                });
            }, true);
        });
    };

    $scope.locationsChecked = function locationsChecked() {
        return filterFilter($scope.locations, {checked: true});
    };

    //gets and loads date data from bestival API and checks to see which dates have been selected
    $scope.loadDateData = () => {
        DataFactory.getDateData()
        .then( (response) => {
            console.log("response:", response);
            $scope.dates = response.data;

            $scope.$watch('dates|filter:{checked:true}', function (nv) {
                console.log("nv:", nv);
                $scope.userSelection = nv.map(function (date) {
                  return date.name;
                });
            }, true);
        });
    };

    $scope.datesChecked = function datesChecked() {
        return filterFilter($scope.dates, {checked: true});
    };




    $scope.allOptions = function allOptions() {
        return $scope.artistsChecked + $scope.genresChecked + $scope.locationsChecked + $scope.datesChecked;
    };

});