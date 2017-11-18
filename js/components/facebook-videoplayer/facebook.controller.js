angular.module('videoFeed')
    .component('facebookVideo',{
        bindings:{
            videoId:'<',
            viewCounts:'<',
            title: '<'
        },
        templateUrl:"js/components/facebook-videoplayer/facebook.template.html",
        controller:function($scope, $sce){
            $scope.getIframeSrc = function (videoId) {
                return $sce.trustAsResourceUrl('https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F'+videoId+'%2F&show_text=false&appId=839966962731053&width=420&height=315');
            };
        }
    });


