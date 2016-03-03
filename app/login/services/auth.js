'use strict';

angular.module('kcoffey-app.login')
.factory('AuthService', ['$http', 'Session', 'UserService', 'API',
function($http, Session, UserService, API) {
    var authService = {};
    
    authService.activeSession = Session.getSessionData();

    authService.login = function (credentials) {
        var sessionObj = {};
        
        return $http.post(API.BASE_URL + API.LOGIN, credentials)
            .then(function(res) {
                sessionObj = {
                    userId: res.data.userId,
                    token: res.data.id,
                    loginDate: res.data.created,
                    ttl: res.data.ttl 
                };
                return UserService.getUserById(res.data.userId, res.data.id);
            })
            .then(function(user) {
                sessionObj.username = user.data.username;
                Session.create(sessionObj);
                return sessionObj;
            })
            .catch(function(err) {
                return err;
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