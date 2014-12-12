'use strict';

angular.module('myApp.view03', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view03', {
    templateUrl: 'view03/view03.html',
    controller: 'View03Ctrl'
  });
}])

.directive('cardProfile2', [function(){
	return {
		restrict: 'E',
		templateUrl: 'view03/card-profile.html'
	};
}])

.controller('View03Ctrl', ['$scope', function($scope) {

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