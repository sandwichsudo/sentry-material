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
var common_1 = require('@angular/common');
var log_service_1 = require('../log.service/log.service');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var MMDGraph = (function () {
    function MMDGraph(logService) {
        this.logService = logService;
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartColours = [
            {
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#b900ff',
                pointBackgroundColor: '#f7fd44',
                pointBorderColor: '#b900ff',
                pointHoverBackgroundColor: '#b900ff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)',
                defaultFontColor: 'white'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    // events
    MMDGraph.prototype.chartClicked = function (e) {
        console.log(e);
    };
    MMDGraph.prototype.chartHovered = function (e) {
        console.log(e);
    };
    MMDGraph.prototype.ngOnInit = function () {
        var _this = this;
        this.logService.getMMDGraphs()
            .then(function (graphs) {
            _this.graph = graphs[_this.log.id];
            _this.lineChartData = _this.graph.mmd;
            _this.lineChartLabels = _this.graph.time;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MMDGraph.prototype, "log", void 0);
    MMDGraph = __decorate([
        core_1.Component({
            selector: 'mmd-graph',
            templateUrl: './app/av-graph/av-graph.html',
            styleUrls: ['./app/av-graph/av-graph.css'],
            directives: [ng2_charts_1.CHART_DIRECTIVES, common_1.NgClass, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            providers: [log_service_1.LogService],
            inputs: ['log']
        }), 
        __metadata('design:paramtypes', [log_service_1.LogService])
    ], MMDGraph);
    return MMDGraph;
}());
exports.MMDGraph = MMDGraph;
//# sourceMappingURL=../../mmd-graph.js.map