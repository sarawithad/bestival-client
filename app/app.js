"use strict";

var app = angular.module("bestivalApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.
   when("/bestival", {
      templateUrl: "partials/mainview.html",
      controller: "OptionsCtrl"
    }).
   when("/", {
      templateUrl: "partials/mainview.html",
      controller: "OptionsCtrl"
    }).
   when("/bestival/recommendation", {
      templateUrl: "partials/recommendation.html",
      controller: "RecoCtrl"
    }).
    otherwise('/');
});




