MainController.$inject = [ '$scope' ];

function MainController (scope) {
	const vm = this;

	vm.openMenu = openMenu;

	function openMenu (mdOpenMenu, event) {
		mdOpenMenu(event);
	}
}

module.exports = { name: 'MainController', ctrl: MainController };