'use strict';

angular.module('jfc', ['ngRoute'])

.directive('jfcCardProfile1', [function(){
	return {
		restrict: 'E',
		templateUrl: 'components/jfc-card-profile/jfc-card-profile.html'
	};
}])

.directive('jfcCardProfile2', [function(){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'components/jfc-card-profile/jfc-card-profile.html',
		scope: {
			users: '=datas'  
		}
	};
}])

.directive('jfcCardProfile3', [function(){
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl: 'components/jfc-card-profile/jfc-card-profile-transclude.html',
		scope: {
			users: '=datas'  
		}
	};
}])

.directive('jfcCardProfile4', [function(){
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl: 'components/jfc-card-profile/jfc-card-profile-edit.html',
		scope: {
			users: '=datas',
			onSave: '&'
		},
		link: function(scope, element, attrs) {

	      scope.edit = function(user){
			user.editMode = true;
	      }

	      scope.save = function(user){
	      	user.editMode = false;
	      	scope.onSave({user: user});
	      }

	    }
	};
}])

.directive('jfcCardProfile5', [function(){
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl: 'components/jfc-card-profile/jfc-card-profile-edit.html',
		scope: {
			users: '=datas',
			onSave: '&'
		},
		controller: function($scope) {

			$scope.setEditModeToFalse = function(){
				for (var i = 0; i < $scope.users.length; i++) {
					$scope.users[i].editMode = false;
				};
	      	}

	      	$scope.edit = function(user){
				user.editMode = true;
	      	}

	      	$scope.save = function(user){
	      		user.editMode = false;
	      		$scope.onSave({user: user});
	      	}

	    },
	    link: function(scope, element, attrs) {

	    	scope.setEditModeToFalse();

	    }
	};
}]);