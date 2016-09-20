(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){
		$scope.name = "";
		$scope.totalValue = 0;  
		$scope.lunchBox = "Enter the lunch name";
		$scope.lunchMessage = "";

		$scope.tooMuchLunchCheck = function(){
			var lunchString = $scope.lunchBox;
			var lunchItems = lunchString.split(",");

			if (lunchItems.length>3){
				$scope.lunchMessage = "Too much!"
			}else{
				$scope.lunchMessage = "Enjoy!"
			}
		}
	}
})();