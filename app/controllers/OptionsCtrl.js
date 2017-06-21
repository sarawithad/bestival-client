"use strict";

app.controller("OptionsCtrl", function($scope, $routeParams, filterFilter, DataFactory, $location){

    // let userSelection = [];
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

    //gets and loads Artist data from bestival API and checks to see which artists have been selected
    $scope.loadArtistData = () => {
        DataFactory.getArtistData()
        .then( (artistresponse) => {
            // console.log("artistresponse:", artistresponse);
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

    //checks to see which artists are checked by looking for checked: true
    $scope.artistsChecked = function artistsChecked() {
        console.log("inside artistsChecked");
        allCheckedArtists = filterFilter($scope.artists, {checked: true});
        // console.log("allCheckedArtists: ", allCheckedArtists);
    };

    //gets and loads Genre data from bestival API and checks to see which genres have been selected
    $scope.loadGenreData = () => {
        DataFactory.getGenreData()
        .then( (genreresponse) => {
            // console.log("genreresponse:", genreresponse);
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
        allCheckedGenres = filterFilter($scope.genres, {checked: true});
    };

    //gets and loads location data from bestival API and checks to see which locations have been selected
    $scope.loadLocationData = () => {
        DataFactory.getLocationData()
        .then( (locationresponse) => {
            // console.log("locationresponse:", locationresponse);
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
        allCheckedLocations = filterFilter($scope.locations, {checked: true});
    };


    //gets and loads date data from bestival API and checks to see which dates have been selected
    $scope.loadDateData = () => {
        DataFactory.getDateData()
        .then( (dateresponse) => {
            // console.log("dateresponse:", dateresponse);
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
        allCheckedDates = filterFilter($scope.dates, {checked: true});
    };


    $scope.loadFestivalData = () => {
        DataFactory.getFestivalData()
        .then( (festivalresponse) => {
            // console.log("festivalresponse:", festivalresponse);
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
        // console.log("inside makeReco click function");
        getItAll();
        // console.log("i came back after getItAll function");


        //loop through to get checked locations and send festivals with that location to new array
        for (var a=0; a < festivals.length; a++){
            let currentFestival = festivals[a];
            // console.log("festivals[a]: ", festivals[a]);

            for (var b=0; b < festivals[a].location.length; b++){
                let currentFestivalLocation = festivals[a].location;
                console.log("currentFestivalLocation: ", currentFestivalLocation);
                // console.log("allCheckedLocations: ", allCheckedLocations);

                for (var c=0; c < allCheckedLocations.length; c++){
                    let currentCheckedLocation = allCheckedLocations[c];
                    // console.log("currentCheckedLocation: ", currentCheckedLocation);

                    // console.log(currentFestivalLocation, currentCheckedLocation.state_name);
 
                    if (currentFestivalLocation === currentCheckedLocation.state_name) {
                        festivalsWithSelectedLocations.push(currentFestival);
                    }
                }
            }
        }

        console.log("festivalsWithSelectedLocations: ", festivalsWithSelectedLocations);


        //loop through to get checked artists and send festivals with that artist to new array
        for (var d=0; d < festivals.length; d++){
            let currentFestival = festivals[d];
            // console.log("festivals[d]: ", festivals[d]);

            for (var e=0; e < festivals[d].date.length; e++){
                let currentFestivalDate = festivals[d].date;
                console.log("currentFestivalDate: ", currentFestivalDate);
                // console.log("allCheckedDates: ", allCheckedDates);

                for (var f=0; f < allCheckedDates.length; f++){
                    let currentCheckedDate = allCheckedDates[f];
                    // console.log("currentCheckedLocation: ", currentCheckedLocation);

                    // console.log(currentFestivalLocation, currentCheckedLocation.state_name);
 
                    if (currentFestivalDate === currentCheckedDate.date) {
                        festivalsWithSelectedDates.push(currentFestival);
                    }
                }
            }
        }

        console.log("festivalsWithSelectedDates: ", festivalsWithSelectedDates);



        //loop through to get checked artists and send festivals with that artist to new array
        for (var i=0; i < festivals.length; i++){
            let currentFestival = festivals[i];
            // console.log("festivals[i]: ", festivals[i]);

            for (var j=0; j < festivals[i].artists.length; j++){
                let currentFestivalArtist = festivals[i].artists[j];
                // console.log("festivals[i].artists[j]: ", festivals[i].artists[j]);

                for (var k=0; k < allCheckedArtists.length; k++){
                    let currentCheckedArtist = allCheckedArtists[k];

                    console.log(currentFestivalArtist, currentCheckedArtist.artist_name);

                    if (currentFestivalArtist === currentCheckedArtist.artist_name) {
                        festivalsWithSelectedArtists.push(currentFestival);
                    }
                }
            }
        }

        console.log("festivalsWithSelectedArtists: ", festivalsWithSelectedArtists);



        //loop through to get checked artists and send festivals with that artist to new array
        for (var x=0; x < festivals.length; x++){
            let currentFestival = festivals[x];
            // console.log("festivals[i]: ", festivals[i]);

            for (var y=0; y < festivals[x].genres.length; y++){
                let currentFestivalGenre = festivals[x].genres[y];
                // console.log("festivals[i].artists[j]: ", festivals[i].artists[j]);

                for (var z=0; z < allCheckedGenres.length; z++){
                    let currentCheckedGenre = allCheckedGenres[z];

                    console.log(currentFestivalGenre, currentCheckedGenre.genre_name);

                    if (currentFestivalGenre === currentCheckedGenre.genre_name) {
                        festivalsWithSelectedGenres.push(currentFestival);
                    }
                }
            }
        }

        console.log("festivalsWithSelectedGenres: ", festivalsWithSelectedGenres);




    };







});