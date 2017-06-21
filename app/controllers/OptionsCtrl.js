"use strict";

app.controller("OptionsCtrl", function($scope, $routeParams, filterFilter, DataFactory, $location){

    let userSelection = [];
    let festivals = [];
    let allCheckedArtists = [];
    let allCheckedGenres = [];
    let allCheckedLocations = [];
    let allCheckedDates = [];
    let bestivalReco = [];
    let selectedArtists = [];

    //gets and loads Artist data from bestival API and checks to see which artists have been selected
    $scope.loadArtistData = () => {
        DataFactory.getArtistData()
        .then( (artistresponse) => {
            console.log("artistresponse:", artistresponse);
            $scope.artists = artistresponse.data;

            // $scope.$watch('artists|filter:{checked:true}', function (artistvalues) {
            //     console.log("artistvalues:", artistvalues);
            //     userSelection = artistvalues.map(function (artist) {
            //         allCheckedArtists.push(artist.artist_name);
            //         console.log("allCheckedArtists: ",allCheckedArtists);
            //         return artist.name;
            //     });
            // }, true);
        });
    };

    $scope.artistsChecked = function artistsChecked() {
        console.log("inside artistsChecked");
        allCheckedArtists = filterFilter($scope.artists, {checked: true});
        console.log("allCheckedArtists: ", allCheckedArtists);
    };

    //gets and loads Genre data from bestival API and checks to see which genres have been selected
    $scope.loadGenreData = () => {
        DataFactory.getGenreData()
        .then( (genreresponse) => {
            console.log("genreresponse:", genreresponse);
            $scope.genres = genreresponse.data;

            // $scope.$watch('genres|filter:{checked:true}', function (genrevalues) {
            //     console.log("genrevalues:", genrevalues);
            //     userSelection = genrevalues.map(function (genre) {
            //         allCheckedGenres.push(genre.genre_name);
            //         console.log("allCheckedGenres: ", allCheckedGenres);                
            //         return genre.name;
            //     });
            // }, true);
        });
    };

    $scope.genresChecked = function genresChecked() {
        return filterFilter($scope.genres, {checked: true});
    };

    //gets and loads location data from bestival API and checks to see which locations have been selected
    $scope.loadLocationData = () => {
        DataFactory.getLocationData()
        .then( (locationresponse) => {
            console.log("locationresponse:", locationresponse);
            $scope.locations = locationresponse.data;

            // $scope.$watch('locations|filter:{checked:true}', function (locationvalues) {
            //     console.log("locationvalues:", locationvalues);
            //     userSelection = locationvalues.map(function (location) {
            //         allCheckedLocations.push(location.state_name);
            //         console.log("allCheckedLocations: ", allCheckedLocations);
            //         return location.name;
            //     });
            // }, true);
        });
    };

    $scope.locationsChecked = function locationsChecked() {
        return filterFilter($scope.locations, {checked: true});
    };

    //gets and loads date data from bestival API and checks to see which dates have been selected
    $scope.loadDateData = () => {
        DataFactory.getDateData()
        .then( (dateresponse) => {
            console.log("dateresponse:", dateresponse);
            $scope.dates = dateresponse.data;

            // $scope.$watch('dates|filter:{checked:true}', function (datevalues) {
            //     console.log("datevalues:", datevalues);
            //     userSelection = datevalues.map(function (date) {
            //         allCheckedDates.push(`${date.month} ${date.year}`);
            //         console.log("allCheckedDates: ", allCheckedDates);
            //         return date.name;
            //     });
            // }, true);
        });
    };

    $scope.datesChecked = function datesChecked() {
        return filterFilter($scope.dates, {checked: true});
    };


    $scope.loadFestivalData = () => {
        DataFactory.getFestivalData()
        .then( (festivalresponse) => {
            console.log("festivalresponse:", festivalresponse);
            festivals = festivalresponse.data;
        });
    };

    $scope.loadFestivalData();


    let getItAll = () => {
        console.log("inside getItAll");
        $scope.artistsChecked();
        $scope.genresChecked();
        $scope.locationsChecked();
        $scope.datesChecked();
    };


    $scope.makeReco = () => {
        console.log("inside click function!");
        getItAll();
        console.log("i came back");


        for (var i=0; i < festivals.length; i++){
            console.log("festivals[i]: ", [i], festivals[i].festival_name);
            for (var j=0; j < festivals[i].artists.length; j++){
                console.log("festivals[i].artists[j]: ", festivals[i].artists[j]);
                for (var k=0; k < allCheckedArtists.length; k++){
                    console.log("allCheckedArtists[k]: ", allCheckedArtists[k].artist_name);
                    if (festivals[i].artists.indexOf(allCheckedArtists[k]) > -1) {
                        selectedArtists.push(festivals[i]);
                        console.log("selectedArtists: ", selectedArtists);
                    }

                }
            }



        }





    };







});