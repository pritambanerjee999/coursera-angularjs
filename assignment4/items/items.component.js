(function(){
	angular.module('data')
	.component('items',{
		templateUrl:'items.template.html',
	//	controller: ItemsComponentController,
		bindings:{
			items: '<',
			myTitle: '@title',
			onRemove: '&'
		}
	});
})();