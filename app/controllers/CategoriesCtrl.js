"use strict";

app.controller("CategoriesCtrl", function($scope, $routeParams, ArtistFactory, $location){


  // $scope.getCheckedOptions = function(typeKey, $index, value) {
  //   $scope.selectedOptions[typeKey] = $scope.selectedOptions[typeKey] || [];
  //   $scope.selectedOptions[typeKey][$index] = value;
  // };

  let festivalOptions = [];

  $scope.checkedOptionsModel = {
    artists: false,
    genres: false,
    locations: false,
    dates: false
  };


  $scope.getCheckedOptions = () => {
    for(var option in $scope.checkedOptionsModel) {
      if ($scope.checkedOptionsModel[option]) {
      festivalOptions.push();
      console.log("i got your options");
      }
    }
  };



//     $scope.isVisible = false; // let's set this to false to kick things off.
     
//     $scope.toggleOptions(event);
//     {
//         event.preventDefault(); // included to show how to prevent default behavior
//         event.stopPropagation(); // included to show how to stop propagation
     
//         if ($scope.isVisible === false){
//              $scope.isVisible = true;
//         }

//         else {
//             $scope.isVisible = false;
//         }
//     }

  //   $scope.getSelectedItems = function(_event) {
  //   var data = $scope.myData;
  //   var results = [];
  //   var day = null;
    
  //   if (!_event && !$scope.update.realtime) {
  //     return
  //   }

  //       angular.forEach(data,function(_week){
  //     angular.forEach(_week.days,function(_day){
  //       day = _day;
  //       angular.forEach(_day.jobs,function(_job){
  //         if (_job.checked === true) {
  //           _job.day = day.templateDay;
  //           results.push(angular.copy(_job));
  //         }
  //       });
  //     });
  //   });

  //   $scope.selectedData = results;
  // }
 
});


