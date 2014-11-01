'use strict';

/**
 * @ngdoc function
 * @name blueTapeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blueTapeApp
 */
angular.module('blueTapeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
