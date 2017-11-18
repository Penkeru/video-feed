angular.module('videoFeed', ['ngRoute'])
	.config(function ($routeProvider) {
		var routeConfig = {
			controller: 'VideoFeedCtrl',
			templateUrl: 'templates/video-feed.html',
			resolve: {
				videoFeeds: function (videoFeedStorage) {
					return videoFeedStorage.getVideoFeed().then(function () {
                        return videoFeedStorage.getVideoSources();
					});
				}
			}
		};

		$routeProvider
			.when('/', routeConfig)
			.otherwise({
				redirectTo: '/'
			});
	});
