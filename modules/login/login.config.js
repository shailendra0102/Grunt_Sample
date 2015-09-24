(function(){
	angular.module('login')

	.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'modules/login/views/partial-login.html'
        });
	});
})();