
angular.module('videoFeed')
	.controller('VideoFeedCtrl', function VideoFeedCtrl($scope, $routeParams, $filter, videoFeeds) {
        $scope.videoSettings = videoFeeds;
	});
