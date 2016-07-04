"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//log components
var log_service_1 = require('./log.service/log.service');
var logs_component_1 = require('./logs/logs.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var log_detail_component_1 = require('./log-detail/log-detail.component');
var sidenav_1 = require('@angular2-material/sidenav');
var button_1 = require('@angular2-material/button');
var icon_1 = require('@angular2-material/icon');
var message_component_1 = require('./message/message.component');
var log_messaging_component_1 = require('./log-messaging/log-messaging.component');
var TestNgMat2AppComponent = (function () {
    function TestNgMat2AppComponent() {
        this.title = 'Sentry';
    }
    TestNgMat2AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css', 'app.component.css'],
            directives: [message_component_1.MessageComponent, router_deprecated_1.ROUTER_DIRECTIVES, sidenav_1.MD_SIDENAV_DIRECTIVES, button_1.MD_BUTTON_DIRECTIVES, icon_1.MdIcon],
            providers: [icon_1.MdIconRegistry,
                router_deprecated_1.ROUTER_PROVIDERS,
                log_service_1.LogService]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.DashboardComponent,
                useAsDefault: true
            },
            {
                path: '/logs',
                name: 'Logs',
                component: logs_component_1.LogsComponent
            }, {
                path: '/detail/:id',
                name: 'LogDetail',
                component: log_detail_component_1.LogDetailComponent
            }, {
                path: '/notify/:id',
                name: 'LogMessaging',
                component: log_messaging_component_1.LogMessagingComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], TestNgMat2AppComponent);
    return TestNgMat2AppComponent;
}());
exports.TestNgMat2AppComponent = TestNgMat2AppComponent;
//# sourceMappingURL=../app.component.js.map