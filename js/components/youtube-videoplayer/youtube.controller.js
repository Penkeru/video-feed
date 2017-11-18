angular.module('videoFeed')
    .component('youtubeVideo',{
        bindings:{
            videoId:'=',
            viewCounts:'=',
            title: '='
        },
        templateUrl:"js/components/youtube-videoplayer/youtube.template.html",
        controller:function($scope, $sce){
            $scope.getIframeSrc = function (videoId) {
                return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + videoId);
            };
        }
    });