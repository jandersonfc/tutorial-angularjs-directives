'use strict';

angular.module('myApp.view08', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view08', {
    templateUrl: 'view08/view08.html',
    controller: 'View08Ctrl'
  });
}])

.controller('View08Ctrl', ['$scope', function($scope) {

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