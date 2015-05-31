angular.module('ion-sticky', ['ionic'])
    .directive('ionSticky', ['$ionicPosition', '$compile', '$timeout', function ($ionicPosition, $compile, $timeout) {
        return {
            restrict: 'A',
            require: '^$ionicScroll',
            link: function ($scope, $element, $attr, $ionicScroll) {
                var scroll = angular.element($ionicScroll.element);
                var clone;
                // creates the sticky divider clone and adds it to DOM
                var createStickyClone = function ($element) {
                    clone = $element.clone().css({
                        position: 'absolute',
                        top: $ionicPosition.position(scroll).top + "px", // put to top
                        left: 0,
                        right: 0
                    });
                    clone[0].className += " assertive";

                    clone.removeAttr('ng-repeat-start');

                    scroll.parent().append(clone);

                    // compile the clone so that anything in it is in Angular lifecycle.
                    $compile(clone)($scope);
                };
                
                var dividers = [];
                $timeout(function() { // wait for sub elements all added
                    var tmp = $element[0].getElementsByClassName("item-divider");
                    for (var i = 0; i < tmp.length; ++i) dividers.push(angular.element(tmp[i]));
                });

                var removeStickyClone = function () {
                    if (clone) 
                        clone.remove();
                    clone = null;
                };

                $scope.$on("$destroy", function () {
                    // remove the clone and unbind the scroll listener
                    removeStickyClone();
                    angular.element($ionicScroll.element).off('scroll');
                });

                var lastActive;
                scroll.on('scroll', function (event) {
                    var active = null;
                    var scrollTop = $ionicScroll.element.scrollTop;
                    for (var i = 0; i < dividers.length; ++i) { // can be changed to binary search
                        if ($ionicPosition.offset(dividers[i]).top - dividers[i].prop('offsetHeight') < 0) { // this equals to jquery outerHeight
                            if (i === dividers.length-1 || $ionicPosition.offset(dividers[i+1]).top -
                                 (dividers[i].prop('offsetHeight') + dividers[i+1].prop('offsetHeight')) > 0) {
                                active = i;
                                break;
                            }
                        }
                    }
    
                    if (lastActive != active) {
                        removeStickyClone();
                        lastActive = active;
                        if (active != null)
                            createStickyClone(dividers[active]);
                    }
                });
            }
        }
    }]);
