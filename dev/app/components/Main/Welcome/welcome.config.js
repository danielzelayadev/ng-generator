config.$inject = [ '$stateProvider' ];

function config (stateProvider) {
	stateProvider
		.state('main.welcome', {
			url: '/welcome',
			templateUrl: 'dist/templates/components/Main/Welcome/welcome.html',
			controller: 'WelcomeController as vm',
			onEnter: onStateEnter
		});
}

let onStateEnter = [ '$rootScope', 
	rootScope => { 
		rootScope.viewTitle  = "Welcome";
    	rootScope.viewStyles = "main welcome";
    }
];

module.exports = config;