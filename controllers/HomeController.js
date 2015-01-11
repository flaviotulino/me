var HomeController = angular.module('HomeController', []);

HomeController.controller('HomeController', ['$scope', '$http',
  function ($scope, $http) {
    $scope.msg = "a";
  }]);

