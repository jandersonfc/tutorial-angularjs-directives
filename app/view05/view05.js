'use strict';

angular.module('myApp.view05', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view05', {
    templateUrl: 'view05/view05.html',
    controller: 'View05Ctrl'
  });
}])

.controller('View05Ctrl', ['$scope', function($scope) {

	$scope.count = 5;

	$scope.users = [
		{
			name: 'Janderson Fernandes Cardoso 5',
			twitter: '@jandersonfc 5',
			website: 'http://jandersonfc.com 5'
		},
		{
			name: 'Janderson Futebol Clube 5',
			twitter: '@jandersonfclube 5',
			website: 'http://jandersonfclube.com 5'
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