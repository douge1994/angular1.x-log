var baseUrl = '../../lib/';

require.config({
    // baseUrl: baseUrl+'public-require',
    paths: {
        "angular": baseUrl+"angular/angular.min",
        "angularAnimate": baseUrl+"angular/angular-animate.min",
        "uiRouter": baseUrl+"angular/angular-ui-router.min",
        "angularAMD": baseUrl+"angularAMD/angularAMD.min",
        "ngload": baseUrl+"angularAMD/ngload",
    },
    shim: {
        angular: {  
            exports: "angular"  
        },
        "angularAnimate":["angular"],
        "uiRouter":["angular"],
        "angularAMD":["angular"],
        "ngload":["angularAMD"],
    },
    deps: ['app']
})