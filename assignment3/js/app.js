(function () {
	'use strict';

	//declares the application
	//then declare the controller
	//after that declare the service
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
	.service('MenuSearchService',MenuSearchService);

	//injecting the service
	NarrowItDownController.$inject = ['MenuSearchService'];
	ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

	function NarrowItDownController(MenuSearchService){
		
	}
	
	MenuSearchService.$inject = ['$http', 'domainName'];
	function MenuSearchService($http, domainName){
		var service = this;
		
		service.getMatchedMenuItems = function (searchTerm) {
		    var response = $http({
		      method: "GET",
		      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
		    });

		    return response;
		  };
	}
	
	
	  

})();