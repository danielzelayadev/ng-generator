genUtils.$injects = [];

function genUtils () {
	const service = {
		addInputTextToList: addInputTextToList,
		removeListItem: removeListItem
	};

	return service;

	function addInputTextToList (text, list, scope, scopeProp) {
		if (text.length == 0) return;

		list.push(text);

		scope[scopeProp] = '';
	}

	function removeListItem (index, list) {
		list.splice(index, 1);
	}

}

module.exports = { name: 'genUtils', srvc: genUtils };