'use strict';

var app = angular.module('httpApp', []);

app.controller('MainController', function ($scope, $http) {


    $scope.myData = { val: "jake" }
    $scope.$watch('myData.val', function (newVal) {
    $scope.myData.toolong = newVal.length >10
        console.log('got')
    });
    $scope.formData = {};

	// when landing on the page, get all todos and show them
	$http.get('/api/todos')
		.success(function(data) {
			$scope.todos = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createTodo = function() {
		$http.post('/api/todos', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	// delete a todo after checking it
	$scope.deleteTodo = function(id) {
		$http.delete('/api/todos/' + id)
			.success(function(data) {
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});

    $scope.getFormAPI = function () {




        //        $http({ method: 'GET', url: 'https://api.github.com/users/angular' })
        $http.get('https://api.github.com/users/angular')
        //       $http.post('https://api.github.com/users/angular',data)
        .success(function (data, status, headers, config) {

            console.log('success', status)
            console.log(data)

        })
        .error(function (data, status, headers, config) {

            console.log('Failure', status)
            console.log(data)

        })

    }

}});

app.config(function ($httpProvider) { 
console.log($httpProvider.defaults.headers.post)

})
