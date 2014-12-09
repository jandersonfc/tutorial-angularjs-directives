'use strict';

angular.module('myApp.view11', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view11', {
    templateUrl: 'view11/view11.html',
    controller: 'View11Ctrl'
  });
}])

.controller('View11Ctrl', ['$scope', function($scope) {

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