'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view01',
  'myApp.view02',
  'myApp.view03',
  'myApp.view04',
  'myApp.view05',
  'myApp.view06',
  'myApp.view07',
  'myApp.view08',
  'myApp.view09',
  'myApp.view10',
  'myApp.version',
  'jfc'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view01'});
}]);
