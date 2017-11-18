angular.module('videoFeed')
    .component("videoPlayer",{
        bindings:{
            videoId:'=',
            viewCounts:'=',
            title: '='
        },
        templateUrl:"js/components/videoplayer/video.template.html",
        controller:function($scope,$sce){
            $scope.fetchMovieURL = function(videoId){
                return $sce.getTrustedResourceUrl(videoId);
            }
        }
    });