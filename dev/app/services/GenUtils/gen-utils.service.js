genUtils.$injects = [ '$mdToast', '$state' ];

function genUtils ($mdToast, $state) {
	const service = {
		addInputTextToList: addInputTextToList,
		removeListItem: removeListItem,
		selectFolder: selectFolder,
		selectFile: selectFile,
		toStandardFileName: toStandardFileName,
		toStandardObjectName: toStandardObjectName,
		toast: toast,
		reload: reload
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

	function selectFolder () {
		return dialog
			.showOpenDialog({properties: ['openDirectory']})[0];
	}

	function selectFile () {
		return dialog
			.showOpenDialog({properties: ['openFile']})[0];
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

	function toStandardObjectName (path, type, separator) {
		let name = path.slice(path.lastIndexOf('/')+1, 
			                path.lastIndexOf('.')-type.length-1);
		
		let currLength = name.length;

		for (let i = 0; i < currLength; i++) {
			const c = name[i];

			if (c === separator) {
				if (i === currLength-1)
					name.splice(i, 1);
				else {
					name = name.slice(0, i) + 
					       name[i+1].toUpperCase() + 
					       name.slice(i+2, currLength);
					currLength--; 
				}
			}
		}

		name = name[0].toUpperCase() + name.slice(1, name.length);

		return name;
	}

	function toast (message, delay) {
		if (!message) message = '';
		if (!delay) delay = 3000;

		$mdToast.show(
      		$mdToast.simple()
        	.textContent(message)
        	.hideDelay(delay)
   		 );
	}

	function reload () {
		$state.go($state.current, {}, {reload: true});
	}

}

module.exports = { name: 'genUtils', srvc: genUtils };