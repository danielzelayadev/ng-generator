generator.$inject = [];

function generator () {
	const service = {
		createApp: createApp
	};

	return service;

	function createApp (appData) {
	}
}

module.exports = { name: 'generator', srvc: generator };