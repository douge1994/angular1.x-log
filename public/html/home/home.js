define([
    'app'
], function(app) {
    console.log(app)
    app.controller('homeCtrl', ["$scope", function ($scope) {
        console.log('homeCtrl')
    }])
})
