"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var index_1 = require('./app/index');
var http_1 = require('@angular/http');
if (index_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(index_1.GrapevineWebAppComponent, [
    http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=main.js.map