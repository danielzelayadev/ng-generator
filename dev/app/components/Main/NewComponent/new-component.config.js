config.$inject = [ '$stateProvider' ];

function config (stateProvider) {
	stateProvider
		.state('main.new-component', {
			url: '/new-component',
			templateUrl: 'dist/templates/components/Main/NewComponent/new-component.html',
			controller: 'NewComponentController as vm',
			onEnter: onStateEnter
		});
}

let onStateEnter = [ '$rootScope', 
	function (rootScope) { 
		rootScope.viewTitle  = "New Component";
    	rootScope.viewStyles = "main new-component";
    }
];

module.exports = config;