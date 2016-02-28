'use strict';

angular.module('kcoffey-app.blog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/blog', {
		templateUrl: 'blog/blog.html',
		controller: 'BlogCtrl'
	});
}])

.controller('BlogCtrl', ['$scope', '$sce', function($scope, $sce) {
	$scope.posts = [
        {
            class: "blog-post image-post",
            icon: "fa-picture-o",
            thumb: {
                title: "this is a title",
                src: "images/blog-01.jpg"
            },
            title: "A Beautiful Picture of Stuff",
            author: "Kevin Coffey",
            date: "1456634869",
            tags: [
                "Photo", "Nature", "Landscape"
            ],
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            comments: [
                "yes",
                "no",
                "maybe"
            ]
        },
        {
            class: "blog-post video-post",
            icon: "fa-play",
            thumb: {
                title: "this is a video",
                src: "https://www.youtube.com/embed/cXQWdOKedNQ"
            }
            
        }
    ];
    
    $scope.trustUrl = function(url) {
        return $sce.trustAsResourceUrl(url);
    }
}]);