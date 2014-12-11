'use strict';

angular.module('myApp.view04', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view04', {
    templateUrl: 'view04/view04.html',
    controller: 'View04Ctrl'
  });
}])

.controller('View04Ctrl', ['$scope', function($scope) {

	$scope.users = [
		{
			name: 'Janderson Fernandes Cardoso 4',
			twitter: '@jandersonfc 4',
			website: 'http://jandersonfc.com 4'
		},
		{
			name: 'Janderson Futebol Clube 4',
			twitter: '@jandersonfclube 4',
			website: 'http://jandersonfclube.com 4'
		}
	];

}]);