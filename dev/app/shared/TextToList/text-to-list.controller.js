TextToListController.$inject = [ '$scope', 'genUtils' ];

function TextToListController (scope, genUtils) {
	const vm = this;

	vm.scope = scope;
	vm.addToList = genUtils.addInputTextToList;
	vm.removeFromList = genUtils.removeListItem;
}

module.exports = { name: 'TextToListController', ctrl: TextToListController };