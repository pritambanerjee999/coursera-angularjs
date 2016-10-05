(function () {
	'use strict';
    
	//declares the application
	//then declare the controller
	//after that declare the service
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService',MenuSearchService)
	.directive('foundItems', foundItemsDirective);

	//injecting the service
	NarrowItDownController.$inject = ['MenuSearchService'];

	function NarrowItDownController(MenuSearchService){
		
		var narrowItDownController = this;
		narrowItDownController.searchItem = "";
		narrowItDownController.found= [];
		
		narrowItDownController.removeItem = function(index){
			narrowItDownController.found.splice(index, 1);
		};
		
		narrowItDownController.narrow = function(){
			
			var promise = MenuSearchService.getMatchedMenuItems();
			
			promise.then(function (response) {
			   var count = 0;
			   var items = response.data.menu_items;
			     console.log(items);
			  // console.log("Length = " + items.length);
			   for (var i=0; i < items.length; i++){
				   if (items[i].description.includes(narrowItDownController.searchItem)){
					  // console.log("Matched >>> " + items[i].description);
					   narrowItDownController.found[count] = items[i];
					   count++;
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
		  
		  service.removeItem = function (itemIndex) {  
			items.splice(itemIndex, 1);
		  };
	}
	
	
	function foundItemsDirective() {
		  var ddo = {
		    templateUrl: 'loader/itemsloaderindicator.template.html',
		    scope: {
		      items: '<',
		      onRemove: '&'
		    },
		    controller: FoundItemsDirectiveController,
		    controllerAs: 'foundDirectiveController',
		    bindToController: true
		  };

		  return ddo;
	}
	
	function FoundItemsDirectiveController(){
		var found = this;
	}

})();