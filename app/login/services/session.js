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
    
    this.create = function(user) {
        if (this.loggedIn()) {
            // Remove existing session cookie
            $cookies.remove('apiSession');
        }
        $cookies.putObject('apiSession', user);
    };
    
    this.destroy = function() {
        $cookies.remove('apiSession');
    };
    
    this.getSessionData = function() {
        return $cookies.getObject('apiSession');
    };
}]);