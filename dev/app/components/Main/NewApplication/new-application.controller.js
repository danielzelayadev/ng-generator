NewAppController.$inject = [ '$scope', 'genUtils' ];

function NewAppController (scope, genUtils) {
	const vm = this;
	const cleanModel = require('./app-data.model');

	vm.scope            = scope;
	vm.appData          = cleanModel();
	vm.submit           = submit;
	vm.reset            = reset;
	vm.addDependency    = genUtils.addInputTextToList;
	vm.removeDependency = genUtils.removeListItem;
	vm.openFileBrowser  = openFileBrowser;

	function submit () {
		console.log(vm.appData);
	}

	function reset () {
		vm.appData = cleanModel();
	}

	function openFileBrowser () {
		const path = genUtils.openFileBrowser();

		vm.appData.destinyFolder = path;
	}

}

module.exports = { name: 'NewAppController', ctrl: NewAppController };