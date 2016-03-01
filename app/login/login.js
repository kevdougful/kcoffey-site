'use strict';

angular.module('kcoffey-app.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'login/login.html',
		controller: 'LoginCtrl'
	});
}])

.controller('LoginCtrl', ['$scope', function($scope) {
	
}]);