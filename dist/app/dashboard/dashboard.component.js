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
var router_deprecated_1 = require('@angular/router-deprecated');
var log_1 = require('../log/log');
var log_service_1 = require('../log.service/log.service');
// material directives
var card_1 = require('@angular2-material/card');
var button_1 = require('@angular2-material/button');
var icon_1 = require('@angular2-material/icon');
var DashboardComponent = (function () {
    function DashboardComponent(router, logService) {
        this.router = router;
        this.logService = logService;
        this.logs = [];
        this.filteredLogs = [];
    }
    DashboardComponent.prototype.hasIssue = function (log) {
        return log.priority > -1;
    };
    DashboardComponent.prototype.comparePriority = function (a, b) {
        if (a.priority > b.priority)
            return -1;
        if (a.priority < b.priority)
            return 1;
        return 0;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logService.getLogs()
            .then(function (logs) {
            _this.filteredLogs = logs.filter(_this.hasIssue);
            for (var _i = 0, _a = _this.filteredLogs; _i < _a.length; _i++) {
                var log = _a[_i];
                _this.logs.push(new log_1.Log(log));
            }
            _this.logs.sort(_this.comparePriority);
        });
    };
    DashboardComponent.prototype.goToDetail = function (log) {
        var link = ['LogDetail', { id: log.id }];
        this.router.navigate(link);
    };
    DashboardComponent.prototype.goToNotify = function (log) {
        var link = ['LogMessaging', { id: log.id }];
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            styleUrls: ['./app/dashboard/dashboard.component.css'],
            templateUrl: './app/dashboard/dashboard.component.html',
            directives: [card_1.MD_CARD_DIRECTIVES, button_1.MD_BUTTON_DIRECTIVES, icon_1.MdIcon],
            providers: [icon_1.MdIconRegistry,
                log_service_1.LogService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, log_service_1.LogService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=../../dashboard.component.js.map