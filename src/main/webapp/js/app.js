'use strict';
angular.module("OpenAPI", ["ngRoute"])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'html/index.html',
                controller: 'Index'
            }).when('/api/:href', {
                templateUrl: 'html/api.html',
                controller: 'Api'
            }).when('/api/:href/:name', {
                templateUrl: 'html/api.html',
                controller: 'Api'
            }).when('/about', {
                templateUrl: 'html/about.html',
                controller: 'About'
            }).when('/api/status', {
                templateUrl: 'html/status.html',
                controller: 'Status'
            }).when('/overview', {
                templateUrl: 'html/overview.html',
                controller: 'Overview'
            }).otherwise({
                redirectTo: '/'
            });
        }]);

/*app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
 //when the route is changed scroll to the proper element.
 //         debugger;
 $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
 $location.hash($routeParams.scrollTo);
 $anchorScroll();
 });
 });*/