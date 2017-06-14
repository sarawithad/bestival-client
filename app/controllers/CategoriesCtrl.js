"use strict";

app.controller('CategoriesCtrl', ['$scope', function($scope){
 
    $scope.isVisible = false; // let's set this to false to kick things off.
     
    $scope.toggleOptions(event)
    {
        event.preventDefault(); // included to show how to prevent default behavior
        event.stopPropagation(); // included to show how to stop propagation
     
        if ($scope.isVisible == false){
             $scope.isVisible = true;
        }

        else {
            $scope.isVisible = false;
        }
    }
 
}]);