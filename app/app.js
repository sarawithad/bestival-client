"use strict";

var app = angular.module("bestivalApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.
   when("/recommendation", {
      templateUrl: "partials/recommendation.html",
      controller: "RecoCtrl"
    }).
    otherwise('/');
});




