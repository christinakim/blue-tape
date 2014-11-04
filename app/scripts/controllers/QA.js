'use strict';

/**
 * @ngdoc function
 * @name blueTapeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blueTapeApp
 */
angular.module('blueTapeApp')
  .controller('QACtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
