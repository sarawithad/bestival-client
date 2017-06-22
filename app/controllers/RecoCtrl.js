"use strict";

app.controller("RecoCtrl", function($scope, RecoFactory){

    $scope.getBestivalReco = function() {
        $scope.RecoArray = RecoFactory.getRecommendation();
        console.log("RecoCtrl: $scope.RecoArray", $scope.RecoArray);
    };

});