/**
 * Created by 千橙 on 13-12-27.
 */

angular.module("OpenAPI").controller("Api", function ($scope, $http, $routeParams, $location, $anchorScroll, $timeout) {

    var href = $routeParams.href;
    var name = $routeParams.name;

    $scope.name = name;
//    debugger;
    $scope.href = href;

    var json = "data/" + href + ".json";
    $http.get(json + "?t=" + (new Date()).getTime()).success(function (data) {
        $scope.list = data;
        for (var i = 0, iLen = $scope.list.length; i < iLen; i++) {
            $scope.list[i].platformOnly = !!$scope.list[i].platformOnly;
            $scope.list[i].agentOnly = !!$scope.list[i].agentOnly;
        }

        $timeout(function () {
            var id = $routeParams.name;
            $scope.scrollTo(id);
        });
    }).error(function () {
        $scope.list = [];
    });

    $scope.scrollTo = function (id) {
        var old = $location.hash();
        $location.hash(id);
        $anchorScroll();
        //reset to old to keep any additional routing logic from kicking in
        $location.hash(old);
    };

    $scope.back = function () {
        $scope.scrollTo("top");
    };

});