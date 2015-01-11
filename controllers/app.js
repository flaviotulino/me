var me = angular.module('me-app', [
  'ngRoute',
  'HomeController'
]);


me.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);