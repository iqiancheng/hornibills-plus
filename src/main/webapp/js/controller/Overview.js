/**
 * Created by 千橙 on 2015-01-12.
 */
angular.module("OpenAPI").controller("Overview", function ($scope, $http, $routeParams, $location, $anchorScroll, $timeout) {

    $scope.scrollTo = function (id) {
        var old = $location.hash();
        $location.hash(id);
//        debugger;
        $anchorScroll();
        //reset to old to keep any additional routing logic from kicking in
        $location.hash(old);
    };

    $scope.back = function () {
        $scope.scrollTo("top");
    };
});