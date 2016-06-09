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

	function submit () {
	}

	function reset () {
		vm.appData = cleanModel();
	}
	
}

module.exports = { name: 'NewAppController', ctrl: NewAppController };