'use strict';

angular.module('kcoffey-app.login')
.factory('UserService', ['$http', '$q', 'API',
function($http, $q, API) {
    var userService = {};

    userService.getUserById = function(userId, token) {
        var deferred = $q.defer();
        
        var url = API.BASE_URL + API.USERS + '/' + userId;
        url += '?access_token=' + token;
        return $http.get(url)
            .success(function(res) {
                deferred.resolve(res);
            })
            .error(function(err) {
                deferred.reject(err);
            });
            return deferred.promise;
    };
    
    return userService;
}]);