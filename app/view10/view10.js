'use strict';

angular.module('myApp.view10', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view10', {
    templateUrl: 'view10/view10.html',
    controller: 'View10Ctrl'
  });
}])

.controller('View10Ctrl', ['$scope', function($scope) {

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