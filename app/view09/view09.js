'use strict';

angular.module('myApp.view09', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view09', {
    templateUrl: 'view09/view09.html',
    controller: 'View09Ctrl'
  });
}])

.controller('View09Ctrl', ['$scope', function($scope) {

	$scope.users = [
		{
			name: 'Janderson Fernandes Cardoso',
			twitter: '@jandersonfc',
			website: 'http://jandersonfc.com'
		},
		{
			name: 'Janderson Futebol Clube',
			twitter: '@jandersonfclube',
			website: 'http://jandersonfclube.com'
		}
	];

	$scope.saveUser = function (user){
		console.log('call resource for example');
		console.log(user);
	}

}]);