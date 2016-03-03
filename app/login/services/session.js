'use strict';

angular.module('kcoffey-app.login')
.service('Session', [ '$cookies', function($cookies) {
    this.loggedIn = function() {
        if ($cookies.getObject('apiSession')) {
            return true;
        } else {
            return false;
        }
    };
    
    this.create = function (token, userId, loginDate, ttl) {
        if (this.loggedIn()) {
            $cookies.remove('apiSession');
        }
        
        $cookies.putObject('apiSession', {
            token: token,
            userId: userId,
            loginDate: loginDate,
            ttl: ttl 
        });
    };
    
    this.destroy = function () {
        $cookies.remove('apiSession');
    };
    
    this.getSessionData = function() {
        return $cookies.getObject('apiSession');
    };
}]);