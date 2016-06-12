NewAppController.$inject = [ '$scope', 'genUtils', 'generator' ];

function NewAppController (scope, genUtils, generator) {
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
		try {
			generator.createApp(vm.appData);
			genUtils.toast('Success!', 3000);
			genUtils.reload();
		}
		catch (err) {
			genUtils.toast(err, 3000);
		}
	}

	function reset () {
		vm.appData = cleanModel();
	}

	function openFileBrowser () {
		const path = genUtils.selectFolder();

		vm.appData.destinyFolder = path;
	}

}

module.exports = { name: 'NewAppController', ctrl: NewAppController };