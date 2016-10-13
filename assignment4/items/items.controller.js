(function(){
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', '$stateParam'];

function ItemsController(MenuDataService) {
	 var itemsController = this;
	 itemsController
}

})();
