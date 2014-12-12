'use strict';

angular.module('jfc', [])

.directive('jfcCardProfile04', [function(){
	return {
		restrict: 'E',
		templateUrl: 'components/jfc-card-profile/jfc-card-profile04.html'
	};
}])

.directive('jfcCardProfile06', [function(){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'components/jfc-card-profile/jfc-card-profile04.html',
		scope: {
			users: '=datas'  
		}
	};
}])

.directive('jfcCardProfile07', [function(){
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl: 'components/jfc-card-profile/jfc-card-profile07.html',
		scope: {
			user: '=data'  
		}
	};
}])

.directive('jfcCardProfile08', [function(){
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl: 'components/jfc-card-profile/jfc-card-profile08.html',
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

.directive('jfcCardProfile09', [function(){
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl: 'components/jfc-card-profile/jfc-card-profile08.html',
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
}])

.directive('jfcCardProfileList', function(){
	return {
		restrict: 'E',
		replace: true,
		scope: {
			users: '=datas',
			onSave: '&'
		},
		templateUrl: 'components/jfc-card-profile/jfc-card-profile10-list.html'
	};
})

.controller('cardProfileController', ['$scope', '$attrs', function($scope, $attrs){

	this.setModeDefault = function(){
		$scope.user.mode = 'view';
  	}

	this.edit = function(){
		$scope.user.mode = 'edit';
  	}

  	this.save = function(){
  		$scope.user.mode = 'view';
  		$scope.onSave({user: $scope.user});
  	}

}])

.directive('jfcCardProfile10Renderer', function(){
	return {
		restrict: 'E',
		replace: false,
		controller: 'cardProfileController',
		templateUrl: 'components/jfc-card-profile/jfc-card-profile10-renderer.html',
		link: function(scope, element, attrs, ctrl) {
	    	
	    	ctrl.setModeDefault();
	    	
	    }
	};
})

.directive('jfcCardProfile10View', function(){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'components/jfc-card-profile/jfc-card-profile10-view.html',
		require: '^jfcCardProfile10Renderer',
		link: function(scope, element, attrs, ctrl) {
	    	
			scope.edit = function(){
				ctrl.edit();
			}
	    	
	    }
	};
})

.directive('jfcCardProfile10Edit', function(){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'components/jfc-card-profile/jfc-card-profile10-edit.html',
		require: '^jfcCardProfile10Renderer',
		link: function(scope, element, attrs, ctrl) {
	    	
	    	scope.save = function(){
				ctrl.save();
			}
	    	
	    }
	};
});