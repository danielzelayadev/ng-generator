config.$inject = [ '$stateProvider' ];

function config (stateProvider) {
	stateProvider
		.state('main', {
			url: '/',
			templateUrl: 'dist/templates/components/Main/main.html',
			controller: 'MainController as mvm',
			onEnter: onStateEnter
		});
}

let onStateEnter = [ '$rootScope', 
	function (rootScope) { 
		rootScope.viewTitle  = "ngGenerator";
    	rootScope.viewStyles = "main";
    }
];

module.exports = config;