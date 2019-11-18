define([
    'angular',
    'angularAMD',
    'uiRouter'
],function(angular, angularAMD){
    var IotAdminApp = angular.module("IotAdminApp", ['ui.router'])
     //路由配置
     IotAdminApp.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {  
        $locationProvider.hashPrefix('');
        //解决路由异常的方法  
        $urlRouterProvider.otherwise('/home');
        $stateProvider  
            .state('test', angularAMD.route({  //使用angularAMD.route处理--避免手动声明controller等
                url: '/test',  
                templateUrl: './html/test/test.html',  
                controllerUrl: '../html/test/test'
            }))
            .state('home',angularAMD.route({
                url: '/home',
                templateUrl: './html/home/home.html',  
                controllerUrl: '../html/home/home'
            }))
    });
    IotAdminApp.controller('indexCtrl',['$scope',function($scope){
        console.log('indexCtrl')
        $scope.name = '测试controller'
    }])
    return IotAdminApp;
})