'use strict';

// App level module
angular.module('kcoffey-app', [
	'ngRoute',
	'kcoffey-app.home',
	'kcoffey-app.contact'
])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/home'});
}]);