'use strict';

angular.module('kcoffey-app.editor', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/editor', {
		templateUrl: 'editor/editor.html',
		controller: 'EditorCtrl'
	});
}])

.controller('EditorCtrl', ['$scope', 'PostService', 
function($scope, PostService) {
	$scope.post = {};
    
    $scope.savePost = function(post) {
        PostService.create(1, post)
            .then(function(res) {
                console.log(res);
            })
            .catch(function(err) {
                console.log(err);
            });
    };
}]);