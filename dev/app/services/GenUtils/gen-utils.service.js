genUtils.$injects = [];

function genUtils () {
	const service = {
		addInputTextToList: addInputTextToList,
		removeListItem: removeListItem,
		openFileBrowser: openFileBrowser,
		toStandardFileName: toStandardFileName
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

	function openFileBrowser () {
		return dialog
			.showOpenDialog({properties: ['openFile', 'openDirectory']});
	}

	function toStandardFileName (str) {
		if (!str || str.length == 0) return;

		let currLength = str.length;

		for (let i = 0; i < currLength; i++) {
			let c = str[i];

			if (i > 0 && i < (currLength - 1) && c !== '-' && c === c.toUpperCase()) {
				str = str.slice(0, i) + '-' + str.slice(i);
				i++;
				currLength++;
			}
		}

		return str.toLowerCase();
	}

}

module.exports = { name: 'genUtils', srvc: genUtils };