'use strict';

angular.module('kcoffey-app.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'login/login.html',
		controller: 'LoginCtrl'
	});
}])

.controller('LoginCtrl', ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService', 
function($scope, $rootScope, AUTH_EVENTS, AuthService) {
	$scope.credentials = {};
    
    if (AuthService.activeSession) {
        $scope.setLoggedIn(true);
        $scope.setCurrentUser(AuthService.activeSession);
    }
    
    $scope.login = function(credentials) {
        AuthService.login(credentials)
            .then(function(user) {
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                $scope.setLoggedIn(true);
                $scope.setCurrentUser(user);
            })
            .catch(function(err) {
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            });
    };
    
    $scope.logout = function() {
        AuthService.logout();
        $scope.setLoggedIn(false);
        $scope.setCurrentUser(null);
    }
}]);