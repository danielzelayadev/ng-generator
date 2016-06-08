config.$inject = [ '$stateProvider' ];

function config (stateProvider) {
	stateProvider
		.state('main.new-service', {
			url: '/new-service',
			templateUrl: 'dist/templates/components/Main/NewService/new-service.html',
			controller: 'NewServiceController as vm',
			onEnter: onStateEnter
		});
}

let onStateEnter = [ '$rootScope', 
	function (rootScope) { 
		rootScope.viewTitle  = "New Service";
    	rootScope.viewStyles = "main new-service";
    }
];

module.exports = config;