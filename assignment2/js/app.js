(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyShoppingController', ToBuyShoppingController)
	.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController);

	ToBuyShoppingController.$inject = ['$scope'];
	AlreadyBoughtShoppingController.$inject = ['$scope'];

	function ToBuyShoppingController($scope){
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
	
	
	function AlreadyBoughtShoppingController($scope){
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