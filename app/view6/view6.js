'use strict';

angular.module('myApp.view6', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view6', {
    templateUrl: 'view6/view6.html',
    controller: 'View6Ctrl'
  });
}])

.controller('View6Ctrl', ['$scope', function($scope) {

	$scope.users = [
		{
			name: 'Janderson Fernandes Cardoso 6',
			twitter: '@jandersonfc 6',
			website: 'http://jandersonfc.com 6'
		},
		{
			name: 'Janderson Futebol Clube 6',
			twitter: '@jandersonfclube 6',
			website: 'http://jandersonfclube.com 6'
		}
	];

}]);