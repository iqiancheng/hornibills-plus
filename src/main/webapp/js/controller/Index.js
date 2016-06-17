/**
 * Created by 千橙 on 13-12-26.
 */
angular.module("OpenAPI").controller("Index", function ($scope, $http) {
    var json = "data/type.json";
    $http.get(json + "?t=" + (new Date()).getTime()).success(function (data) {
        $scope.list = data;
    });

});