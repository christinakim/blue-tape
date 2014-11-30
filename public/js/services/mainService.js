// js/services/mainService.js

var app = angular.module('mainService', []);

app.factory('_____', function($http){

	return{
		getSubjects: function(term){
			return $http.get('')
			return $http.get('');
		}
	}
});
