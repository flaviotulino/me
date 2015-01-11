var me = angular.module('me-app', [
    'ngRoute',
    'HomeController'
]);


me.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
                when('/me', {
                    templateUrl: '/me/templates/home.html',
                    controller: 'HomeController'
                }).
                when("/me/test", {
                    templateUrl: "/me/templates/test.html"
                }).
                otherwise({
                    redirectTo: '/me'
                });
    }]);