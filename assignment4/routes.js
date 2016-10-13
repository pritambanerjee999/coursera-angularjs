(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'home/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'categories/categories.template.html',
    controller: 'CategoriesListController as categoriesController',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
    	// console.log("I come in routes");
        return MenuDataService.getAllCategories();
      }]
    }
  })
  
  .state('items', {
	    url: '/items/{itemId}',
	    templateUrl: 'items/items.template.html',
	    controller: 'ItemsController as itemController',
	    resolve: {
	      items: ['$stateParams', 'MenuDataService',
	            function ($stateParams, MenuDataService) {
	              return MenuDataService.getItemsForCategory($stateParams.itemId)
	                .then(function (items) {
	                	console.log("items:");
	                	console.log($stateParams.itemId);
	                  return items[$stateParams.itemId];
	                });
	            }]
	    }
	  });
  
  
}

})();
