angular.module('myApp', ['ui.router', 'oc.lazyLoad'])
    .controller('indexCtrl', ['$scope', function ($scope) {
        console.log('this is IndexPage')
    }])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        console.log(123)
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise('/');
        function ocLazyLoad(ctrlName, path) {
            return {
                ctrlName: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(path);
                }]
            }
        }
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: './html/home/home.html',
                // controllerUrl:'/html/home/home.js',
                // controller:'homeCtrl',
                resolve: {
                    people: function () {
                        return Promise.resolve('789')
                    },
                    homeCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('./html/home/home.js');
                    }]
                },
                // resolve:ocLazyLoad('homeCtrl', './html/home/home.js')
            })
            .state('test',{
                name: 'test',
                url: '/test',
                templateUrl: './html/test/test.html',
                resolve: {
                    people: function (PeopleService) {
                        // return Promise.resolve('testtes3e')
                        console.log(PeopleService.getAllPeople())
                        return PeopleService.getAllPeople();
                    },
                    testCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('./html/test/test.js');
                    }]
                }
            })
            .state('test.child',{
                url: '/{id}',
                templateUrl: './html/test/test-person.html',
                resolve: {
                    testPersonCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('./html/test/test-person.js');
                    }]
                }
            })
            .state('test-one', {
                name: 'test-one',
                url: '/test-one',
                templateUrl: './html/test-one/test-one.html'
            })
    })
