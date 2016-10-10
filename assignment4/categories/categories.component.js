//angular.module('ShoppingListComponentApp', [])
//.controller('ShoppingListController', ShoppingListController)
//.factory('ShoppingListFactory', ShoppingListFactory)
//.component('shoppingList', {
//  templateUrl: 'shoppingList.html',
//  controller: ShoppingListComponentController,
//  bindings: {
//    items: '<',
//    myTitle: '@title',
//    onRemove: '&'
//  }
//});

(function(){
	angular.module('data')
	.component('categories',{
		templateUrl:'categories.template.html',
	//	controller: CategoriesListController,
	//	controllerAs: 'categoriesListController',
		bindings:{
			items: '<',
			myTitle: '@title',
			onRemove: '&'
		}
	});
	
	
	
})();