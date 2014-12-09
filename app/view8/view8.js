'use strict';

angular.module('myApp.view8', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view8', {
    templateUrl: 'view8/view8.html',
    controller: 'View8Ctrl'
  });
}])

.controller('View8Ctrl', ['$scope', function($scope) {

	$scope.count = 8;

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

	$scope.updateUsers = function(){
		$scope.count = $scope.count + 1;
		$scope.users.push({
			name: 'Janderson ' + $scope.count,
			twitter: '@janderson'  + $scope.count,
			website: 'http://janderson' + $scope.count +'.com'
		});
	};

}]);