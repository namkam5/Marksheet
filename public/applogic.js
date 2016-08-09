			if(typeof angular == 'undefined') {alert("angular not loaded")}

			//((sem1gpa*sem1credits)+(sem2gpa*sem2credits)+(sem3gpa*sem3credits)+(sem4gpa*sem4credits)+(sem5gpa*sem5credits)+(sem6gpa*sem6credits)+(sem7gpa*sem7credits)+(sem8gpa*sem8credits))/(sem1credits+sem2credits+		sem3credits+sem4credits+sem5credits+sem6credits+sem7credits+sem8credits)

			var app = angular.module('gpaCal',[]);
			app.controller('myCtrl', ['$scope', function($scope){


				$scope.sem1gpa = 0; $scope.sem1credits = 0;
				$scope.sem2gpa = 0; $scope.sem2credits = 0;
				$scope.sem3gpa = 0; $scope.sem3credits = 0;
				$scope.sem4gpa = 0; $scope.sem4credits = 0;
				$scope.sem5gpa = 0; $scope.sem5credits = 0;
				$scope.sem6gpa = 0; $scope.sem6credits = 0;
				$scope.sem7gpa = 0; $scope.sem7credits = 0;
				$scope.sem8gpa = 0; $scope.sem8credits = 0;

				//$scope.calculate = function() {

				// $scope.x = {
				//	'cgp': (($scope.sem1gpa*$scope.sem1credits)+($scope.sem2gpa*$scope.sem2credits)+($scope.sem3gpa*$scope.sem3credits)+($scope.sem4gpa*$scope.sem4credits)+($scope.sem5gpa*$scope.sem5credits)+($scope.sem6gpa*$scope.sem6credits)+($scope.sem7gpa*$scope.sem7credits)+($scope.sem8gpa*$scope.sem8credits))/($scope.sem1credits+$scope.sem2credits+$scope.sem3credits+$scope.sem4credits+$scope.sem5credits+$scope.$scope.sem6credits+$scope.sem7credits+$scope.sem8credits)
				//}

				//};


			}]);
