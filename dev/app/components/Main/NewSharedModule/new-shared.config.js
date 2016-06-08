config.$inject = [ '$stateProvider' ];

function config (stateProvider) {
	stateProvider
		.state('main.new-shared', {
			url: '/new-shared',
			templateUrl: 'dist/templates/components/Main/NewSharedModule/new-shared.html',
			controller: 'NewSharedController as vm',
			onEnter: onStateEnter
		});
}

let onStateEnter = [ '$rootScope', 
	function (rootScope) { 
		rootScope.viewTitle  = "New Shared Module";
    	rootScope.viewStyles = "main new-shared";
    }
];

module.exports = config;