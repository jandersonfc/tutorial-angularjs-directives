'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl',['$scope', function($scope) {
	$scope.user = {
		name: 'Janderson Fernandes Cardoso',
		twitter: '@jandersonfc',
		website: 'http://jandersonfc.com' 
	};
}]);