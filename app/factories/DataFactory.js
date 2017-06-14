"use strict";

app.factory("FestivalDataStorage", function($q, $http){
  let getData = () => {
        return $q(function(resolve, reject){
          $http.get(`localhost:8000`)
           .then(function(festivalData){
                resolve(festivalData);
            })
            .catch(function(error){
                reject(error);
            });
        });
    };


  return {getData};
  
});