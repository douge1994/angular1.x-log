angular.module('myApp')
    .controller('testCtrl', ["$scope", "$stateParams", function ($scope, $stateParams) {
        $scope.people = $scope.$resolve.people;
        // console.log($stateParams)
        // console.log($scope)
    }])