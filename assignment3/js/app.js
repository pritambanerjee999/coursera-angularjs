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
		
		narrowItDownController.narrow = function(findMe){
			console.log("In controller call");
			var promise = MenuSearchService.getMatchedMenuItems("small_portion_name");
			promise.then(function (response) {
			   var items = response.data;
			   for (var i =0; i < items.length; i++){
				   if (items[i].desc.includes(findMe)){
					   narrowItDownController.found = items[i];
				   }
			   }
			   console.log(response.data);
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
		
		service.getMatchedMenuItems = function (searchTerm) {
		    var response = $http({
		      method: "GET",
		      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
		    });
		    return response;
		  };
	}
	
	
	  

})();