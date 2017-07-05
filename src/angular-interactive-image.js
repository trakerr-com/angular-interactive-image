var template = "<div class=\"interactive-image-svg-container\"> <svg class=\"interactive-image-tooltip-background\" ng-model=\"svg\" version=\"1.1\" vbox=\"{{myViewBox}}\" preserveAspectRatio=\"xMinYMin meet\" ng-style=\"{'background-image': myBackground, 'max-height': height, 'max-width': width}\" ng-mouseenter=\"toggleOverlay()\" ng-mouseleave=\"toggleOverlay()\" > <mask ng-attr-id=\"{{maskId}}\"> <rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"white\" ng-if=\"!mask\"/> <rect ng-attr-x=\"{{mask.x}}\" ng-attr-y=\"{{mask.y}}\" ng-attr-width=\"{{mask.width}}\" ng-attr-height=\"{{mask.height}}\" fill=\"white\" ng-if=\"mask\"/> <rect ng-repeat=\"tooltip in tooltips\" ng-attr-height=\"{{tooltip.height}}\" ng-attr-width=\"{{tooltip.width}}\" ng-attr-x=\"{{tooltip.x}}\" ng-attr-y=\"{{tooltip.y}}\"></rect> </mask> <rect ng-attr-height=\"{{height}}\" ng-attr-width=\"{{width}}\" ng-if=\"addOverlay\" opacity=\"0.2\" ng-attr-mask=\"{{maskUrl}}\"></rect> <g ng-repeat=\"tooltip in tooltips\" class=\"interactive-image-tooltip\"> <image ng-if=\"tooltip.includeIcon\" ng-attr-x=\"{{tooltip.x + (tooltip.width-30)}}\" ng-attr-y=\"{{tooltip.y}}\" height=\"30\" width=\"30\" xlink:href=\"https://d3hen887jsv7sh.cloudfront.net/img/tooltip_icon.png\" class=\"interactive-image-fade\"> </image> <rect ng-attr-height=\"{{tooltip.height}}\" ng-attr-width=\"{{tooltip.width}}\" opacity=\"0\" style=\"fill: white\" ng-attr-x=\"{{tooltip.x}}\" ng-attr-y=\"{{tooltip.y}}\" uib-tooltip-template=\"'{{tooltip.filePath}}'\" tooltip-append-to-body=\"true\" tooltip-placement=\"top\" class=\"interactive-image-fade\" ng-if=\"tooltip.filePath\" tooltip-animation=\"false\"></rect> <rect ng-attr-height=\"{{tooltip.height}}\" ng-attr-width=\"{{tooltip.width}}\" opacity=\"0\" style=\"fill: white\" ng-attr-x=\"{{tooltip.x}}\" ng-attr-y=\"{{tooltip.y}}\" uib-tooltip=\"'{{tooltip.text}}'\" tooltip-append-to-body=\"true\" tooltip-placement=\"top\" class=\"interactive-image-fade\" ng-if=\"tooltip.text\" tooltip-animation=\"false\"></rect> <rect ng-attr-height=\"{{tooltip.height}}\" ng-attr-width=\"{{tooltip.width}}\" opacity=\"0\" style=\"fill: white\" ng-attr-x=\"{{tooltip.x}}\" ng-attr-y=\"{{tooltip.y}}\" uib-tooltip-html=\"'{{tooltip.html}}'\" tooltip-append-to-body=\"true\" tooltip-placement=\"top\" class=\"interactive-image-fade\" ng-if=\"tooltip.html\" tooltip-animation=\"false\"></rect> </g> </svg></div>";
var app = angular.module('angular-interactive-image', ['ngSanitize'])
    .directive('interactiveImage', [
      function() {
          return {
              scope: {
                  imagePath: "=imagepath",
                  height: "=height",
                  width: "=width",
                  tooltips: "=tooltips",
                  mask: "=mask"
              },
              template: template,
              controller: 'interactive-image-directive'
          }
      }
    ])
    .directive('vbox', function () {
      return {
          link: function (scope, element, attrs) {
              attrs.$observe('vbox', function (value) {
                  element.context.setAttribute('viewBox', value);
              })
          }
      };
    });
app.controller('interactive-image-directive', ["$scope","$sanitize", function($scope,$sanitize) {
    $scope.myBackground = "url(\'" + $scope.imagePath + "\')";
    $scope.maskId = 'mask' + $scope.$id;
    $scope.maskUrl = "url(\'#mask" + $scope.$id + "\')";
    $scope.myViewBox = "0 0 " + $scope.width + " " + $scope.height;
    $scope.maxwidth = "'" + $scope.width + "'";
    $scope.maxweight = "'" + $scope.height + "'";
    $scope.addOverlay = false;  
    $scope.toggleOverlay = function(){
        $scope.addOverlay = !$scope.addOverlay;
    };
}]);