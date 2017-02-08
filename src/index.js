require.context("./scss", true, /\.scss$/); // custom stylesheets
require("../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss");

require("../node_modules/angular/angular.min.js");
require("./js/app.js"); // custom angular // TODO: Does't work with require.context() for dynamically adding files like on line 1.
require("../node_modules/bootstrap/dist/js/bootstrap.min.js"); // add just the dependencies you need from the node_modules or delete this if you don't use bootstrap's javascript

console.log("Hello from your entry point at index.js! :)");