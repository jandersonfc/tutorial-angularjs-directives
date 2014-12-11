'use strict';

angular.module('myApp.view02', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view02', {
    templateUrl: 'view02/view02.html',
    controller: 'View02Ctrl'
  });
}])

.directive('cardProfile', [function(){
	return {
		template: '<h2>{{user.name}}</h2>\n'+
			'<p>Twitter: {{user.twitter}}</p>\n'+
			'<p>website: <a href="{{user.website}}">{{user.website}}</a></p>'
	};
}])

.controller('View02Ctrl', ['$scope', function($scope) {

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