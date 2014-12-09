'use strict';

angular.module('myApp.view7', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view7', {
    templateUrl: 'view7/view7.html',
    controller: 'View7Ctrl'
  });
}])

.controller('View7Ctrl', ['$scope', function($scope) {

	$scope.count = 7;

	$scope.users = [
		{
			name: 'Janderson Fernandes Cardoso 7',
			twitter: '@jandersonfc 7',
			website: 'http://jandersonfc.com 7'
		},
		{
			name: 'Janderson Futebol Clube 7',
			twitter: '@jandersonfclube 7',
			website: 'http://jandersonfclube.com 7'
		}
	];

	$scope.updateUsers = function(){
		$scope.count = $scope.count + 1;
		$scope.users.push({
			name: 'Janderson ' + $scope.count,
			twitter: '@janderson'  + $scope.count,
			website: 'http://janderson' + $scope.count +'.com'
		});
	};

}]);