angular.module('myApp')
    .controller('testPersonCtrl', ["$scope", "$stateParams", function ($scope, $stateParams) {
        console.log("testpersonCtrl")
        console.log($stateParams)
        console.log($scope)
    }])