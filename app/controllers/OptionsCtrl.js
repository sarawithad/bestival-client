"use strict";

app.controller("OptionsCtrl", function($scope, $routeParams, filterFilter, DataFactory, RecoFactory, $location){

    // setup vars
    let festivals = [];
    let allCheckedArtists = [];
    let allCheckedGenres = [];
    let allCheckedLocations = [];
    let allCheckedDates = [];
    let festivalsWithSelectedArtists = [];
    let festivalsWithSelectedGenres = [];
    let festivalsWithSelectedLocations = [];
    let festivalsWithSelectedDates= [];
    let bestivalReco = [];
    $scope.finalRecoArray = [];

    //gets and loads Artist data from bestival API
    $scope.loadArtistData = () => {
        DataFactory.getArtistData()
        .then( (artistresponse) => {
            $scope.artists = artistresponse.data;
        });
    };

    //checks to see which artists are checked by looking for checked: true
    $scope.artistsChecked = function artistsChecked() {
        allCheckedArtists = filterFilter($scope.artists, {checked: true});
    };

    //gets and loads Genre data from bestival API
    $scope.loadGenreData = () => {
        DataFactory.getGenreData()
        .then( (genreresponse) => {
            $scope.genres = genreresponse.data;
        });
    };

    //checks to see which genres are checked by looking for checked: true
    $scope.genresChecked = function genresChecked() {
        allCheckedGenres = filterFilter($scope.genres, {checked: true});
    };

    //gets and loads location data from bestival API
    $scope.loadLocationData = () => {
        DataFactory.getLocationData()
        .then( (locationresponse) => {
            $scope.locations = locationresponse.data;
        });
    };

    //checks to see which locations are checked by looking for checked: true
    $scope.locationsChecked = function locationsChecked() {
        allCheckedLocations = filterFilter($scope.locations, {checked: true});
    };


    //gets and loads date data from bestival API
    $scope.loadDateData = () => {
        DataFactory.getDateData()
        .then( (dateresponse) => {
            $scope.dates = dateresponse.data;
        });
    };

    //checks to see which dates are checked by looking for checked: true
    $scope.datesChecked = function datesChecked() {
        allCheckedDates = filterFilter($scope.dates, {checked: true});
    };


    $scope.loadFestivalData = () => {
        DataFactory.getFestivalData()
        .then( (festivalresponse) => {
            festivals = festivalresponse.data;
        });
    };

    //load festival data here so can compare user's checked options
    $scope.loadFestivalData();

    //gets everything user has checked
    let getAllTheThings = () => {
        $scope.artistsChecked();
        $scope.genresChecked();
        $scope.locationsChecked();
        $scope.datesChecked();
    };


    $scope.makeReco = () => {

        getAllTheThings();

        //loop through to get checked locations and send festivals with that location to new array
        for (var a=0; a < festivals.length; a++){
            let currentFestival = festivals[a];

            for (var b=0; b < festivals[a].location.length; b++){
                let currentFestivalLocation = festivals[a].location;

                for (var c=0; c < allCheckedLocations.length; c++){
                    let currentCheckedLocation = allCheckedLocations[c];
   
                    if (currentFestivalLocation === currentCheckedLocation.state_name) {
                        festivalsWithSelectedLocations.push(currentFestival);
                    }
                }
            }
        }


        //loop through to get checked artists and send festivals with that artist to new array
        for (var d=0; d < festivals.length; d++){
            let currentFestival = festivals[d];

            for (var e=0; e < festivals[d].date.length; e++){
                let currentFestivalDate = festivals[d].date;

                for (var f=0; f < allCheckedDates.length; f++){
                    let currentCheckedDate = allCheckedDates[f];
 
                    if (currentFestivalDate === currentCheckedDate.date) {
                        festivalsWithSelectedDates.push(currentFestival);
                    }
                }
            }
        }


        //loop through to get checked artists and send festivals with that artist to new array
        for (var i=0; i < festivals.length; i++){
            let currentFestival = festivals[i];

            for (var j=0; j < festivals[i].artists.length; j++){
                let currentFestivalArtist = festivals[i].artists[j];

                for (var k=0; k < allCheckedArtists.length; k++){
                    let currentCheckedArtist = allCheckedArtists[k];

                    if (currentFestivalArtist === currentCheckedArtist.artist_name) {
                        festivalsWithSelectedArtists.push(currentFestival);
                    }
                }
            }
        }



        //loop through to get checked artists and send festivals with that artist to new array
        for (var x=0; x < festivals.length; x++){
            let currentFestival = festivals[x];
            // console.log("festivals[i]: ", festivals[i]);

            for (var y=0; y < festivals[x].genres.length; y++){
                let currentFestivalGenre = festivals[x].genres[y];
                // console.log("festivals[i].artists[j]: ", festivals[i].artists[j]);

                for (var z=0; z < allCheckedGenres.length; z++){
                    let currentCheckedGenre = allCheckedGenres[z];

                    // console.log(currentFestivalGenre, currentCheckedGenre.genre_name);

                    if (currentFestivalGenre === currentCheckedGenre.genre_name) {
                        festivalsWithSelectedGenres.push(currentFestival);
                    }
                }
            }
        }

        //push all the festivalsWithSelected... arrays into one big array: bestivalReco
        Array.prototype.push.apply(bestivalReco, festivalsWithSelectedArtists, festivalsWithSelectedGenres, festivalsWithSelectedDates, festivalsWithSelectedLocations);

        //eliminate dups in bestivalReco
        let noDupesReco = new Set(bestivalReco);

        //turn back into array bc ng-repeating
        $scope.finalRecoArray = [...noDupesReco.values()];

        setBestivalReco();

    };

        function setBestivalReco() {
            RecoFactory.setRecommendation($scope.finalRecoArray);
            $location.url("bestival/recommendation");
        }

});
