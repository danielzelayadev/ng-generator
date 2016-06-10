moduleToList.$inject = [];

function moduleToList () {
	const directive = {
		restrict: 'E',
		scope: {
			moduleType: '@?',
			modules: '='
		},
		controller: 'ModuleToListController as vm',
		templateUrl: 'dist/templates/shared/ModuleToList/module-to-list.html'
	};

	return directive;
}

module.exports = { name: 'moduleToList', drtv: moduleToList };