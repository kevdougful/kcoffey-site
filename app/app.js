'use strict';

// App level module
angular.module('kcoffey-app', [
	'ngRoute',
	'kcoffey-app.home',
	'kcoffey-app.contact',
    'kcoffey-app.blog'
])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/home'});
}]);