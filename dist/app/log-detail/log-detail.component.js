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
var router_deprecated_2 = require('@angular/router-deprecated');
var log_1 = require('../log/log');
var log_service_1 = require('../log.service/log.service');
var notification_service_1 = require('../notification.service/notification.service');
// material directives
var card_1 = require('@angular2-material/card');
var button_1 = require('@angular2-material/button');
var icon_1 = require('@angular2-material/icon');
//chart
var av_graph_1 = require('../av-graph/av-graph');
var mmd_graph_1 = require('../mmd-graph/mmd-graph');
var LogDetailComponent = (function () {
    function LogDetailComponent(logService, routeParams, router, notificationService) {
        this.logService = logService;
        this.routeParams = routeParams;
        this.router = router;
        this.notificationService = notificationService;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        this.notificationService = notificationService;
    }
    LogDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.logService.getLog(id)
            .then(function (log) {
            _this.log = new log_1.Log(log);
        });
    };
    LogDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    LogDetailComponent.prototype.goToNotify = function (log) {
        var link = ['LogMessaging', { id: log.id }];
        this.router.navigate(link);
    };
    LogDetailComponent.prototype.copyToClipboard = function (idType) {
        var clipboardInfo = "";
        if (idType == 'base64id') {
            clipboardInfo = this.log.base64id;
        }
        else {
            clipboardInfo = this.log.hexid;
        }
        //get hidden input
        var input = document.querySelector("[name=" + idType + "]");
        //select text
        input.select();
        //copy to clipboard and generate notification
        try {
            document.execCommand('copy');
            console.log('copied');
            this.notificationService.newNotification("Copied to clipboard!", -1);
        }
        catch (err) {
            console.log(err);
        }
    };
    // events
    LogDetailComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    LogDetailComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    LogDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-log-detail',
            styleUrls: ['./app/log-detail/log-detail.component.css'],
            templateUrl: './app/log-detail/log-detail.component.html',
            directives: [card_1.MD_CARD_DIRECTIVES, button_1.MD_BUTTON_DIRECTIVES, icon_1.MdIcon, av_graph_1.AvailibilityGraph, mmd_graph_1.MMDGraph],
            providers: [icon_1.MdIconRegistry,
                log_service_1.LogService]
        }), 
        __metadata('design:paramtypes', [log_service_1.LogService, router_deprecated_1.RouteParams, router_deprecated_2.Router, notification_service_1.NotificationService])
    ], LogDetailComponent);
    return LogDetailComponent;
}());
exports.LogDetailComponent = LogDetailComponent;
//# sourceMappingURL=../../log-detail.component.js.map