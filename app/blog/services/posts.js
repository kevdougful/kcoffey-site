'use strict';

angular.module('kcoffey-app.blog')
.factory('PostService', ['$http', '$q', 'API', 'Session',
function($http, $q, API, Session) {
    var postService = {};
    
    // Post being edited
    postService.activePost = null;
    // Blog whos posts are being edited
    postService.activeBlog = null;
    
    // Check if post exists
    postService.exists = function(blogId, postId) {
        
    };
    
    // Get all posts for a given blog
    postService.getAll = function(blogId) {
        
    };
    
    // Create a new post on a given blog
    postService.create = function(blogId, post) {
        var url = API.BASE_URL;
        url += blogId ? API.BLOGS + '/' + blogId + API.POSTS : API.POSTS;
        console.log(url);
        
        var deferred = $q.defer();
        
        $http.post(url, post)
            .then(function(res) {
                deferred.resolve(res.data);
            })
            .catch(function(err) {
                deferred.reject(err);
            });
        
        return deferred.promise;
    };
    
    // Update a given post
    postService.update = function(post) {
        
    };
    
    return postService;
}]);