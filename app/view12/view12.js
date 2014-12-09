'use strict';

angular.module('myApp.view12', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view12', {
    templateUrl: 'view12/view12.html',
    controller: 'View12Ctrl'
  });
}])

.controller('View12Ctrl', ['$scope', function($scope) {

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