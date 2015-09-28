(function(){

	angular.module('login')

	.controller('loginController',ctrlFunction);

	ctrlFunction.$inject=['$scope'];

	function ctrlFunction($scope){
		vm=this;
		vm.myName="Login page";
	}

})();