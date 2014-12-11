'use strict';

angular.module('myApp.view06', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view06', {
    templateUrl: 'view06/view06.html',
    controller: 'View06Ctrl'
  });
}])

.controller('View06Ctrl', ['$scope', function($scope) {

	$scope.count = 6;

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