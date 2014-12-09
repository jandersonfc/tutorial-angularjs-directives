'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.directive('cardProfile', [function(){
	return {
		template: '<h2>{{user.name}}</h2>\n'+
			'<p>Twitter: {{user.twitter}}</p>\n'+
			'<p>website: <a href="{{user.website}}">{{user.website}}</a></p>'
	};
}])

.controller('View4Ctrl', ['$scope', function($scope) {

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