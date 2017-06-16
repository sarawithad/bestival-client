"use strict";

app.controller("ArtistCtrl", function($scope, $routeParams, ArtistFactory, $location){

    $scope.loadArtistData = () => {
        ArtistFactory.getArtistData()
        .then( (response) => {
            console.log("response:", response);
            $scope.artists = response.data;
        });
    };

    $scope.artistsChecked = function(artist){
    
    };

});