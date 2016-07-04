"use strict";
// Imports for loading & configuring the in-memory web api
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var in_memory_data_service_1 = require('./app/in-memory-data.service/in-memory-data.service');
var notification_service_1 = require('./app/notification.service/notification.service');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_2 = require('@angular/core');
var _1 = require('./app/');
var http_2 = require('@angular/http');
if (_1.environment.production) {
    core_2.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.TestNgMat2AppComponent, [
    http_2.HTTP_PROVIDERS,
    notification_service_1.NotificationService,
    core_1.provide(http_1.XHRBackend, { useClass: angular2_in_memory_web_api_1.InMemoryBackendService }),
    core_1.provide(angular2_in_memory_web_api_1.SEED_DATA, { useClass: in_memory_data_service_1.InMemoryDataService }) // in-mem server data
]);
//# sourceMappingURL=main.js.map