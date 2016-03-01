'use strict';

// App level module
angular.module('kcoffey-app', [
	'ngRoute',
    'kcoffey-app.login',
	'kcoffey-app.home',
	'kcoffey-app.contact',
    'kcoffey-app.blog'
])
.controller('AppCtrl', [ '$scope', 'AuthService', 
function ($scope, AuthService) {
  $scope.currentUser = null;
 
  $scope.setCurrentUser = function (user) {
    $scope.currentUser = user;
  };
}])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/home'});
}])
.constant('API', {
    'BASE_URL': 'http://52.24.100.97:3004/api',
    'LOGIN': '/Users/login'
})
.constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
});