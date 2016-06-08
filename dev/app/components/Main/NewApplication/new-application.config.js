config.$inject = [ '$stateProvider' ];

function config (stateProvider) {
	stateProvider
		.state('main.new-app', {
			url: '/new-app',
			templateUrl: 'dist/templates/components/Main/NewApplication/new-application.html',
			controller: 'NewAppController as vm',
			onEnter: onStateEnter
		});
}

let onStateEnter = [ '$rootScope', 
	function (rootScope) { 
		rootScope.viewTitle  = "New Application";
    	rootScope.viewStyles = "main new-app";
    }
];

module.exports = config;