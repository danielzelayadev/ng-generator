appLogo.$inject = [];

function appLogo () {
	const directive = {
		restrict: 'E',
		templateUrl: 'dist/templates/shared/AppLogo/app-logo.html'
	};

	return directive;
}

module.exports = { name: 'appLogo', drtv: appLogo };