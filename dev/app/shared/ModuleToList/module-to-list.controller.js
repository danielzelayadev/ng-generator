ModuleToListController.$inject = [ '$scope', 'genUtils' ];

function ModuleToListController (scope, genUtils) {
	const vm = this;

	vm.addModule = addModule;
	vm.removeFromList = genUtils.removeListItem;

	function addModule () {
		const path = genUtils.selectFile();

		const moduleName = genUtils.toStandardObjectName(path, 'module', '-');

		scope.modules.push({name: moduleName, path: path });
	}
	
}

module.exports = { name: 'ModuleToListController', ctrl: ModuleToListController };