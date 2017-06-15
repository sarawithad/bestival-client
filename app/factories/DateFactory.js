"use strict";

app.factory("DateFactory", function($q, $http){
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

  return {getDateData};
  
});