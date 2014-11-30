// public/js/ngRoutes.js
	angular.module('ngRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

 $routeProvider
      .when('/', {
        templateUrl: '/views/index.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: '/views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/QA', {
        templateUrl: '/views/QA.html',
        controller: 'QACtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });