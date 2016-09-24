(function () {
	'use strict';

	//declares the application
	//then declare the controller
	//after that declare the service
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyShoppingController', ToBuyShoppingController)
	.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

	//injecting the service
	AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
	ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

	function ToBuyShoppingController(ShoppingListCheckOffService){
		
	}
	
	
	function  AlreadyBoughtShoppingController(ShoppingListCheckOffService){
		
	}
	
	
	function ShoppingListCheckOffService(){
		service = this;
		var toBuyItems= [];
		var boughtItems = [];
		
		//add to bought items
		service.addToBoughtItem = function (itemName, quantity) {
		    var toBuyItem = {
		      name: itemName,
		      quantity: quantity
		    };
		    boughtItems.push(item);
		  };
		  
		  //remove from toBuyItems
		  service.removeToBuyItem = function (itemIdex) {
			   toBuyItems.splice(itemIdex, 1);
		  };
		  
		  service.getToBuyItems = function () {
			    return items;
		  };
		  
		  service.getToBuyItems = function () {
			    return toBuyItems;
		  };
		  
		  service.getBoughtItems = function () {
			    return boughtItems;
		  };
		
	}
	
})();