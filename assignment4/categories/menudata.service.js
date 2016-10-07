(function(){
	angular.module('data')
	.service('MenuDataService', MenuDataService);
	
	function MenuDataService(){
		service = this;
		
		// https://davids-restaurant.herokuapp.com/categories.json
		service.getAllCategories = function(){
			
		}
		
		// https://davids-restaurant.herokuapp.com/menu_items.json?category=
		service.getItemsForCategory = function(categoryShortName){
			
		}
	}
})();