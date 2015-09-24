(function(){
	angular.module('Grunt')

	.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/login');
    
    /*$stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('login', {
            url: '/login',
            templateUrl: 'modules/login/views/partial-login.html'
        });*/
	});
})();