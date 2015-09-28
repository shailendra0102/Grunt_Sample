(function(){
	angular.module('Grunt')
    .config(configFun);

    configFun.$inject=['$stateProvider','$urlRouterProvider'];

    function configFun($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/login');    
    };
    
})();