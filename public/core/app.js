/** 
 * app.js
 */
define([
    'angular',
    'angularAMD',
    'uiRouter',
    './index'
], function (angular,angularAMD,x, IotAdminApp) {
    return angularAMD.bootstrap(IotAdminApp);
})  