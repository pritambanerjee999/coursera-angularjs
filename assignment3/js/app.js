(function () {
	'use strict';
    
	//declares the application
	//then declare the controller
	//after that declare the service
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
//	.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
	.service('MenuSearchService',MenuSearchService);

	//injecting the service
	NarrowItDownController.$inject = ['MenuSearchService'];
//	ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

	function NarrowItDownController(MenuSearchService){
		
		var narrowItDownController = this;
		narrowItDownController.narrow = function(){
			console.log("In controller call");
			MenuSearchService.getMatchedMenuItems("small_portion_name");
		}
	}
	
	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http){
		var service = this;
		
		service.getMatchedMenuItems = function (searchTerm) {
		    var response = $http({
		      method: "GET",
		      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
		    });
		    console.log("Response >>> :");
		    console.log(response);
		    return response;
		  };
	}
	
	
	  

})();