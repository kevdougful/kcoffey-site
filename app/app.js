'use strict';

// App level module
angular.module('kcoffey-app', [
	'ngRoute',
    'kcoffey-app.login',
	'kcoffey-app.home',
	'kcoffey-app.contact',
    'kcoffey-app.blog'
])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/home'});
}])
.constant('API', {
    'BASE_URL': '52.24.100.97:3004/api',
    'LOGIN': '/Users/login'
});