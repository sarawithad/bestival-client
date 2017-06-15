"use strict";

app.factory("GenreFactory", function($q, $http){
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

  return {getGenreData};
  
});