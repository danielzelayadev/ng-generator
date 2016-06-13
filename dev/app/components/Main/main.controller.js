MainController.$inject = [ '$scope', 'genUtils', '$rootScope' ];

function MainController (scope, genUtils, rootScope) {
	const vm = this;

	vm.navOptions = [
		{ name: 'New Application', sref: 'main.new-app' },
		{ name: 'Open Application', sref: genUtils.currentState() },
		{ name: 'Close', sref: 'main.welcome' }
	];
	vm.openMenu = openMenu;
	vm.openApp  = openApp;

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

	rootScope.$on('$stateChangeStart', event => {
		vm.navOptions[2].disabled = genUtils.currentState() !== 'main.welcome';
	});
	
	genUtils.goTo('main.welcome');
}

module.exports = { name: 'MainController', ctrl: MainController };