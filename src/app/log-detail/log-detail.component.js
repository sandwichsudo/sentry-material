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
var LogDetailComponent = (function () {
    function LogDetailComponent(logService, routeParams) {
        this.logService = logService;
        this.routeParams = routeParams;
    }
    LogDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.logService.getLog(id)
            .then(function (log) { return _this.log = log; });
    };
    LogDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    LogDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-log-detail',
            styleUrls: ['app/log-detail/log-detail.component.css'],
            templateUrl: 'app/log-detail/log-detail.component.html'
        }), 
        __metadata('design:paramtypes', [log_service_1.LogService, router_deprecated_1.RouteParams])
    ], LogDetailComponent);
    return LogDetailComponent;
}());
exports.LogDetailComponent = LogDetailComponent;
//# sourceMappingURL=log-detail.component.js.map