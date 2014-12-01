'use strict';

/**
 * @ngdoc function
 * @name blueTapeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blueTapeApp
 */
angular.module('BlueTape')
  .controller('QACtrl', function ($scope) {
    $scope.awesomeThings = [
      'AngularJS',
    ];
    console.log('Hello');
    console.log($scope.question)
  });
