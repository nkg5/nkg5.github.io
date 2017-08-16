var app = angular.module('projectsApp', []);

app.controller('projectsController', ['$scope','$http',function($scope, $http) {
    $http.get('res/projects.json').then(function(response){
		$scope.projects = response.data.projects;
	});
}]);
