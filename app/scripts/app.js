'use strict';

/**
 * @ngdoc overview
 * @name blueTapeApp
 * @description
 * # blueTapeApp
 *
 * Main module of the application.
 */
angular
  .module('blueTapeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/QA', {
        templateUrl: 'views/QA.html',
        controller: 'QACtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
