var app = angular.module('app', []);
app.controller('postcontroller', function($scope, $http, $location) {
	$scope.submitForm = function() {
		var url = $location.absUrl() + "postcustomer";

		var config = {
			headers : {
				'Accept': 'application/json',
				'Content-Type' :'application/json'
			}
		}
		var data = {
			'firstname':$scope.firstname,
			'lastname':$scope.lastname
		};
		console.log(url);
		console.log(data);
		console.log(config);

		$http.post(url, data, config).then(
				function(response) {
					console.log(response)	
					$scope.postResultMessage = response.data.firstname;
				},
				function error(response) {
					console.log('data in error: '+response)	
					$scope.postResultMessage = "Error with status: "
							+ response.statusText+ ' Message: ' +response.message;
				});

		$scope.firstname = "";
		$scope.lastname = "";
	}
});

app.controller('getcontroller', function($scope, $http, $location) {
	$scope.getfunction = function() {
		var url = $location.absUrl() + "getallcustomer";

		$http.get(url).then(
				function(response) {
					console.log('data: '+response.data)
					$scope.response = response.data
				},
				function error(response) {
					console.log('data: '+response.data)	
					$scope.postResultMessage = "Error with status: "
							+ response.statusText;
				});
	}
});