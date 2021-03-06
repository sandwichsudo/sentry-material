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
var log_service_1 = require('../log.service/log.service');
var DashboardComponent = (function () {
    function DashboardComponent(router, logService) {
        this.router = router;
        this.logService = logService;
        this.logs = [];
    }
    DashboardComponent.prototype.hasIssue = function (log) {
        return log.priority > -1;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logService.getLogs()
            .then(function (logs) { return _this.logs = logs.filter(_this.hasIssue); });
    };
    DashboardComponent.prototype.gotoDetail = function (log) {
        var link = ['LogDetail', { id: log.id }];
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            styleUrls: ['app/dashboard/dashboard.component.css'],
            templateUrl: 'app/dashboard/dashboard.component.html'
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, log_service_1.LogService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map