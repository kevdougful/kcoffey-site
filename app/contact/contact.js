'use strict';

angular.module('kcoffey-app.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/contact', {
		templateUrl: 'contact/contact.html',
		controller: 'ContactCtrl'
	});
}])

.controller('ContactCtrl', ['$scope', function($scope) {
	
}]);