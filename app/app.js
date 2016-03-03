'use strict';

// App level module
angular.module('kcoffey-app', [
	'ngRoute', 'ngCookies',
    'kcoffey-app.login',
	'kcoffey-app.home',
	'kcoffey-app.contact',
    'kcoffey-app.blog'
])
.controller('AppCtrl', [ '$scope', 'AuthService', 'Session',
function ($scope, AuthService, Session) {
    $scope.currentUser = null;
    $scope.loggedIn = false;
    
    $scope.setCurrentUser = function (user) {
        $scope.currentUser = user;
    };
    
    $scope.setLoggedIn = function(value) {
        $scope.loggedIn = value;
    };
    
}])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/home'});
}])
.constant('API', {
    'BASE_URL': 'http://localhost:3000/api',
    'USERS': '/Users',
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