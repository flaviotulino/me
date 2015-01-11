var me = angular.module('me-app', [
    'ngRoute',
    'HomeController'
]);


me.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
                when('/', {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeController'
                }).
                when("/test", {
                    templateUrl: "templates/test.html"
                }).
                otherwise({
                    redirectTo: '/'
                });
    }]);