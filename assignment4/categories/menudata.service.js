(function(){
	angular.module('data')
	.service('MenuDataService', MenuDataService)
	.constant('hostName',"https://davids-restaurant.herokuapp.com");
	
	MenuDataService.$inject = ['$http', 'hostName'];
	
	function MenuDataService($http, ApiBasePath){
		service = this;
		
		// https://davids-restaurant.herokuapp.com/categories.json
		service.getAllCategories = function(){
			console.log("In categories");
			var response = $http({
			      method: "GET",
			      url: (hostName + "/categories.json")
			    });

			    return response;
		}
		
		// https://davids-restaurant.herokuapp.com/menu_items.json?category=
		service.getItemsForCategory = function(categoryShortName){
			var response = $http({
			      method: "GET",
			      url: (hostName + "/categories.json"),
			      params: {
			          category: categoryShortName
			        }
			    });

			    return response;
		}
	}
})();