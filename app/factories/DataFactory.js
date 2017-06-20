"use strict";

app.factory("DataFactory", function($q, $http){

  let getArtistData = () => {
        return $q(function(resolve, reject){
          $http.get(`http://localhost:8000/artists`)
           .then(function(artistData){
                resolve(artistData);
            })
            .catch(function(error){
                reject(error);
            });
        });
    };

    let getGenreData = () => {
        return $q(function(resolve, reject){
          $http.get(`http://localhost:8000/genres`)
           .then(function(genreData){
                resolve(genreData);
            })
            .catch(function(error){
                reject(error);
            });
        });
    };

  let getLocationData = () => {
        return $q(function(resolve, reject){
          $http.get(`http://localhost:8000/locations`)
           .then(function(locationData){
                resolve(locationData);
            })
            .catch(function(error){
                reject(error);
            });
        });
    };

  let getDateData = () => {
        return $q(function(resolve, reject){
          $http.get(`http://localhost:8000/dates`)
           .then(function(dateData){
                resolve(dateData);
            })
            .catch(function(error){
                reject(error);
            });
        });
    };

    let getFestivalData = () => {
        return $q(function(resolve, reject){
          $http.get(`http://localhost:8000/festivals`)
           .then(function(festivalData){
                resolve(festivalData);
            })
            .catch(function(error){
                reject(error);
            });
        });
    };
    

  return {getArtistData, getGenreData, getLocationData, getDateData, getFestivalData};
  
});