ModuleToListController.$inject = [ '$scope', 'genUtils', 'module' ];

function ModuleToListController (scope, genUtils, module) {
	const vm = this;

	vm.addModule = addModule;
	vm.removeFromList = genUtils.removeListItem;

	function addModule () {
		const path = genUtils.openFileBrowser();

		const moduleMeta = module.getModuleMeta(path);

		if (moduleMeta)
			scope.modules.push(moduleMeta);
	}
}

module.exports = { name: 'ModuleToListController', ctrl: ModuleToListController };