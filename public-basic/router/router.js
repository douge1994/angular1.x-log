angular.module('myApp',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider){
        console.log(123)
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl:'./html/home/home.html',
                // controllerUrl:'/html/home/home.js',
                controller:'homeCtrl',
                
                // resolve: {
                //     people: function(){
                //         return 1234;
                //     }
                // }
            })
            .state({
                name:'test',
                url:'/test',
                templateUrl:'./html/test/test.html'
            })
            .state({
                name:'test-one',
                url:'/test-one',
                templateUrl:'./html/test-one/test-one.html'
            })
    })

    