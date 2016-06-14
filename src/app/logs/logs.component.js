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
var log_service_1 = require('../log.service/log.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var LogsComponent = (function () {
    function LogsComponent(router, logService) {
        this.router = router;
        this.logService = logService;
    }
    LogsComponent.prototype.getLogs = function () {
        var _this = this;
        this.logService.getLogs().then(function (logs) { return _this.logs = logs; });
    };
    LogsComponent.prototype.ngOnInit = function () {
        this.getLogs();
    };
    LogsComponent.prototype.gotoDetail = function (id) {
        this.router.navigate(['LogDetail', { id: id }]);
    };
    LogsComponent = __decorate([
        core_1.Component({
            selector: 'my-logs',
            templateUrl: 'app/logs/logs.component.html',
            styleUrls: ['app/logs/logs.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, log_service_1.LogService])
    ], LogsComponent);
    return LogsComponent;
}());
exports.LogsComponent = LogsComponent;
//# sourceMappingURL=logs.component.js.map