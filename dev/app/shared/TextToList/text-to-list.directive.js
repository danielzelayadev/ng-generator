textToList.$inject = [];

function textToList () {
	const directive = {
		restrict: 'E',
		scope: {
			title: '@?',
			listTitle: '@?',
			list: '=?'
		},
		controller: 'TextToListController as vm',
		templateUrl: 'dist/templates/shared/TextToList/text-to-list.html'
	};

	return directive;
}

module.exports = { name: 'textToList', drtv: textToList };