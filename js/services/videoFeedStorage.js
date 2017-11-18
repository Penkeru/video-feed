angular.module('videoFeed')
	.factory('videoFeedStorage', function ($http, $injector) {
        var videoSources = [];
        function _getVideoFeed(){
            return $http.get('https://cdn.playbuzz.com/content/feed/items')
                .then(function (response) {
                    if(response.status === 200 && response.xhrStatus=== "complete"){
                        if(response.data){
                            response.data.items.forEach(function(item){
                                var videoSource = $injector.get('VideoSource').build(item);
                                if(videoSource !== null) {
                                    videoSources.push(videoSource)
                                }
                            });
                        }
                    }
                });
        }

        function _getVideoSources(){
            return videoSources;
        }


        return {
            getVideoFeed:_getVideoFeed,
            getVideoSources:_getVideoSources
        };


	})

    .factory('VideoSource', function () {
        function VideoSource(title , videoId , source , views) {
            this.title = title;
            this.videoId = videoId;
            this.source = source;
            this.views = views;
        }


        VideoSource.prototype.getSource = function () {
            return this.source;
        };


        var possibleVideoSources = ['facebook', 'youtube', 'url'];


        function checkSource(source) {
            return possibleVideoSources.indexOf(source) !== -1;
        }

        function checkType(type){
            return type === 'video';
        }


        VideoSource.possibleVideoSources = angular.copy(possibleVideoSources);


        VideoSource.build = function (data) {
            if (!checkType(data.type) || !checkSource(data.source)) {
                return null;
            }
            return new VideoSource(
                data.title,
                data.videoId,
                data.source,
                data.views
            );
        };


        return VideoSource;
    })


