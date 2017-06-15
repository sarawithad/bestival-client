"use strict";

app.factory("LocationFactory", function($q, $http){
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

  return {getLocationData};
  
});