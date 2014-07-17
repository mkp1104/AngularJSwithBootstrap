
// create angular app
	var validationApp = angular.module('validationApp', []);
  //mandatory skill controller!!!

	validationApp.controller('MSController', function ($scope) {
	  $scope.skills = [];
	  var defaultForm = {
	    skillname: "",
	    jrssRating: "",
	    interviewerRating: ""
	  };
	  $scope.addSkills = function (reff) {
//	    var skill = {
//	      skillname: $scope.name,
//	      jrssRating: $scope.jrssrating,
//	      interviewerRating: $scope.interviewrating


//	    };
	    $scope.skills.push(reff);
	    $scope.reff = angular.copy(defaultForm);
	  }

	});

	//optional skill controller

	validationApp.controller('OPController', function ($scope) {
	  $scope.skills = [];
	  var defaultForm = {
	    skillname: "",
	    jrssRating: "",
	    interviewerRating: ""
	  };
	  $scope.addSkills = function (reff) {
//	    var skill = {
//	      skillname: $scope.name,
//	      jrssRating: $scope.jrssrating,
//	      interviewerRating: $scope.interviewrating


//	    };
	    $scope.skills.push(reff);
	    $scope.reff = angular.copy(defaultForm);
	  }

	});


	// create angular controller
	validationApp.controller('mainController', function($scope) {

 





		// function to submit the form after all validation has occurred			
		$scope.submitForm = function() {

			// check to make sure the form is completely valid
			if ($scope.userForm.$valid) {
				alert('our form is amazing');
			}

		};

	});