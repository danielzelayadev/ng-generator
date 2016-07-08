MainController.$inject = [ '$scope', 'genUtils', '$rootScope' ];

function MainController (scope, genUtils, rootScope) {
	const vm = this;

	vm.openMenu  = openMenu;
	vm.openApp   = openApp;
	vm.showClose = true;

	function openMenu (mdOpenMenu, event) {
		mdOpenMenu(event);
	}

	function openApp () {
		try {
			const app = genUtils.openApp();
			// genUtils.goTo('main.open-app', app);
		} catch (err) {
			genUtils.toast(err, 5000);
		}
	}

	rootScope.$on('$stateChangeSuccess', event => {
		vm.showClose = !genUtils.currentState().includes('welcome');
	});
	
	genUtils.goTo('main.welcome');
}

module.exports = { name: 'MainController', ctrl: MainController };