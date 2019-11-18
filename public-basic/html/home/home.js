angular.module('myApp')
    .controller('homeCtrl', ["$scope", function ($scope) {
        $scope.people = $scope.$resolve.people
        console.log($scope)
    }])