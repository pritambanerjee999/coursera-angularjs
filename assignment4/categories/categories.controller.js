(function(){
'use strict';

angular.module('data')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['MenuDataService'];

function CategoriesListController(MenuDataService) {
	 var menu = this;

	  var promise = MenuDataService.getAllCategories();
	  console.log("Promise=");
	  console.log(promise);

	  promise.then(function (response) {
		console.log(response.data);
	    menu.categories = response.data;
	  })
	  .catch(function (error) {
	    console.log("Something went terribly wrong.");
	  });

	  menu.logMenuItems = function (shortName) {
	    var promise = MenuCategoriesService.getItemsForCategory(shortName);

	    promise.then(function (response) {
	      console.log(response.data);
	    })
	    .catch(function (error) {
	      console.log(error);
	    })
	  };
}

})();
