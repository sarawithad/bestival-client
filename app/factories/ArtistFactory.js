"use strict";

app.factory("ArtistFactory", function($q, $http){
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

  return {getArtistData};
  
});