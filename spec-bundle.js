Error.stackTraceLimit = Infinity;
require('phantomjs-polyfill');
require('core-js');
require('ts-helpers');
require('zone.js/dist/zone.js');
require('zone.js/dist/long-stack-trace-zone.js');
require('zone.js/dist/jasmine-patch.js');
require('zone.js/dist/async-test.js');
require('zone.js/dist/fake-async-test.js');
require('@angular/core/testing');
var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.setBaseTestProviders(
    browser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    browser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

/*
 Use the the context method on require that webpack created in order to tell
 webpack what files we actually want to require or import.  Below, context will
 be an function/object with file names as keys.  using that regex we are saying
 look in client/app and find any file that ends with spec.js and get its
 path. By passing in true we say do this recursively
 */
var appContext = require.context('./src', true, /\.spec\.ts/);

// get all the files, for each file, call the context function
// that will require the file and load it up here. Context will
// loop and require those spec files here
appContext.keys().map(appContext);
