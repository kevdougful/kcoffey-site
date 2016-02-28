'use strict';

angular.module('kcoffey-app.blog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/blog', {
		templateUrl: 'blog/blog.html',
		controller: 'BlogCtrl'
	});
}])

.controller('BlogCtrl', ['$scope', function($scope) {
	
}]);