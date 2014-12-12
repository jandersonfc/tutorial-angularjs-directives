'use strict';

angular.module('myApp.view07', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view07', {
    templateUrl: 'view07/view07.html',
    controller: 'View07Ctrl'
  });
}])

.controller('View07Ctrl', ['$scope', function($scope) {

	$scope.count = 7;

	$scope.users = [
		{
			name: 'Janderson Fernandes Cardoso',
			twitter: '@jandersonfc',
			linkedin: 'http://linkedin.com/jandersonfc',
			facebook: 'http://facebook.com/jandersonfc',
			website: 'http://jandersonfc.com'
		},
		{
			name: 'Janderson Futebol Clube',
			twitter: '@jandersonfclube',
			linkedin: 'http://linkedin.com/jandersonfclube',
			facebook: 'http://facebook.com/jandersonfclube',
			website: 'http://jandersonfclube.com'
		}
	];

	$scope.updateUsers = function(){
		$scope.count = $scope.count + 1;
		$scope.users.push({
			name: 'Janderson ' + $scope.count,
			twitter: '@janderson'  + $scope.count,
			linkedin: 'http://likedin.com/janderson' + $scope.count,
			facebook: 'http://facebook.com/janderson' + $scope.count,
			website: 'http://janderson' + $scope.count +'.com'
		});
	};

}]);