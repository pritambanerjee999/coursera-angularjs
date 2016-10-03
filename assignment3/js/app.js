(function () {
	'use strict';
    
	//declares the application
	//then declare the controller
	//after that declare the service
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService',MenuSearchService);

	//injecting the service
	NarrowItDownController.$inject = ['MenuSearchService'];

	function NarrowItDownController(MenuSearchService){
		
		var narrowItDownController = this;
		narrowItDownController.searchItem = "";
		narrowItDownController.narrow = function(){
			
			
			var promise = MenuSearchService.getMatchedMenuItems();
			
			promise.then(function (response) {
			   var items = response.data;
			   console.log("Length" + items.length);
			   for (var i=0; i < items.length; i++){
				   console.log("Did not match !!!!=== " + items[i].description);
				   if (items[i].description.includes(narrowItDownController.searchItem)){
					   console.log("Matched >>> " + items[i].description);
					   narrowItDownController.found = items[i];
				   }
			   }
			   
			   return narrowItDownController.found;
			})
			 .catch(function (error) {
			    console.log("Something went terribly wrong.");
			});
		}
	}
	
	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http){
		var service = this;
		
		service.getMatchedMenuItems = function () {
		    var response = $http({
		      method: "GET",
		      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
		    });
		    return response;
		  };
	}
	
	
	  

})();