/**
* App Module
*
* Description
*/
var app = angular.module('App', ['ngRoute'])
.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller:'LoginCtrl',
		templateUrl: 'login.html'
	})
	.when('/register/', {
		controller:'RegisterCtrl',
		templateUrl: 'register.html'
	})
	.otherwise({
		redirectTo:'/'
	});
})