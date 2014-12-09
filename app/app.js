'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.view5',
  'myApp.view6',
  'myApp.view7',
  'myApp.view8',
  'myApp.view9',
  'myApp.view10',
  'myApp.view11',
  'myApp.view12',
  'myApp.version',
  'jfc'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
