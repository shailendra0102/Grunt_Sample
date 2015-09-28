(function(){
	angular.module('login')

	.config(configFun);

	configFun.$inject=['$stateProvider','$urlRouterProvider'];

	function configFun($stateProvider, $urlRouterProvider) {
    
	    $stateProvider
        .state('login', {
            url: '/login',
            views:{
            	'main':{
            		templateUrl: 'modules/login/views/partial-login.html',
            		controller:'loginController as vm'
            	}
            }
        });
	}

})();