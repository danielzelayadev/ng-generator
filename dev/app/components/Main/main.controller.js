MainController.$inject = [ '$scope' ];

function MainController (scope) {
	const vm = this;

	vm.navOptions = [
		{ name: 'New Application', sref: 'main.new-app' },
		{ name: 'New Component', sref: 'main.new-component' },
		{ name: 'New Service', sref: 'main.new-service' },
		{ name: 'New Shared Module', sref: 'main.new-shared' }
	];
	vm.openMenu = openMenu;

	function openMenu (mdOpenMenu, event) {
		mdOpenMenu(event);
	}
}

module.exports = { name: 'MainController', ctrl: MainController };