'use strict';

angular.module('kcoffey-app.login')
.factory('AuthService', ['$http', 'Session', 'API',
function($http, Session, API) {
    var authService = {};
    
    authService.login = function (credentials) {
        return $http
            .post(API.BASE_URL + API.LOGIN, credentials)
            .then(function (res) {
                Session.create(
                    res.data.id, // The token
                    res.data.userId,
                    res.data.created,
                    res.data.ttl 
                );
                return res.data.userId;
        });
    };
    
    authService.logout = function() {
        Session.destroy();
    }
    
    authService.isAuthenticated = function () {
        return Session.loggedIn();
    };
    
    return authService;
}]);