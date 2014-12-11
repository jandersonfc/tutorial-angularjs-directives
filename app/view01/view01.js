'use strict';

angular.module('myApp.view01', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view01', {
    templateUrl: 'view01/view01.html',
    controller: 'View01Ctrl'
  });
}])

.controller('View01Ctrl', ['$scope', function($scope) {

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

}]);