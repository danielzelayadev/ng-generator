require("angular");
require("angular-ui-router");
require("angular-messages");
require("angular-material");
require("angular-ui-form-validation");

const app = require("./app.module");

angular.bootstrap(document, [ app ]);