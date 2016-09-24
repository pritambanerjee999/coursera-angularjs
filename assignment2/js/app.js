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
		var toBuyController = this;
		toBuyController.items = ShoppingListCheckOffService.getToBuyItems();
		
		toBuyController.buy = function(index){
			console.log("In Buy Method:");
			ShoppingListCheckOffService.addToBoughtItem(index);
			ShoppingListCheckOffService.removeToBuyItem(index);

		}

	}


	function  AlreadyBoughtShoppingController(ShoppingListCheckOffService){

	}


	function ShoppingListCheckOffService(){
		var service = this;

		var toBuyItems = [
		              {
		            	  name: "Milk",
		            	  quantity: "2"
		              },
		              {
		            	  name: "Donuts",
		            	  quantity: "200"
		              },
		              {
		            	  name: "Cookies",
		            	  quantity: "300"
		              },
		              {
		            	  name: "Chocolate",
		            	  quantity: "5"
		              },
		              
		              {
		            	  name: "Cake",
		            	  quantity: "65"
		              }
		            
		    ];
		
		var boughtItems = [];

		//add to bought items
		service.addToBoughtItem = function (index) {
			console.log(toButItems[index]);
			var itemToBeAdded = toBuyItems[index];
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