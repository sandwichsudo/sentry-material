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
var checkbox_1 = require('@angular2-material/checkbox');
var input_1 = require('@angular2-material/input');
var LogMessagingComponent = (function () {
    function LogMessagingComponent(logService, routeParams, notificationService, router) {
        this.logService = logService;
        this.routeParams = routeParams;
        this.notificationService = notificationService;
        this.router = router;
        this.canSend = true;
        this.mailtoHref = "";
        this.contacts = [{
                checked: new checkbox_1.MdCheckboxChange(),
                email: 'email@email.com',
                id: 0
            }, {
                checked: new checkbox_1.MdCheckboxChange(),
                email: 'email1@email.com',
                id: 1
            }, {
                checked: new checkbox_1.MdCheckboxChange(),
                email: 'email2@email.com',
                id: 2
            }];
    }
    LogMessagingComponent.prototype.updateEmailTo = function ($event, contact) {
        this.setMailCC($event, contact);
        this.setMailtoMessage();
    };
    LogMessagingComponent.prototype.setMailCC = function ($event, changedContact) {
        this.emailTo = '';
        var count = 0;
        for (var i = 0; i < this.contacts.length; i++) {
            var contact = this.contacts[i];
            if (((contact.id == changedContact.id) && $event) || ((contact.id != changedContact.id) && contact.checked)) {
                this.emailTo += contact.email + ",";
                count++;
            }
        }
        this.emailTo = this.emailTo.slice(0, -1);
        this.setButtonStatus(count > 0);
    };
    LogMessagingComponent.prototype.setButtonStatus = function (isEnabled) {
        this.canSend = isEnabled;
    };
    LogMessagingComponent.prototype.goToDetail = function (log) {
        var link = ['LogDetail', { id: log.id }];
        this.router.navigate(link);
    };
    LogMessagingComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.logService.getLog(id)
            .then(function (log) {
            _this.log = new log_1.Log(log);
            _this.setOperatorMessage();
            _this.setMailtoMessage();
        });
    };
    LogMessagingComponent.prototype.setOperatorMessage = function () {
        this.emailBody = "At timestamp " + new Date() + ", " + this.log.name + " experienced the following issue:\n" + this.log.getStatusMessage() + ".\nAs stated by chrome policy, this will result in this log no longer being trusted.";
        this.emailSubject = encodeURIComponent(this.log.name + ":" + this.log.getStatusMessage() + ".");
    };
    LogMessagingComponent.prototype.setMailtoMessage = function () {
        this.mailtoHref = "mailto:" + this.emailTo + "?subject=" + this.emailSubject + "&body=" + encodeURIComponent(this.emailBody);
    };
    LogMessagingComponent = __decorate([
        core_1.Component({
            selector: 'log-messaging',
            styleUrls: ['./app/log-messaging/log-messaging.component.css'],
            templateUrl: './app/log-messaging/log-messaging.component.html',
            directives: [card_1.MD_CARD_DIRECTIVES, button_1.MD_BUTTON_DIRECTIVES, icon_1.MdIcon, checkbox_1.MD_CHECKBOX_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES],
            providers: [icon_1.MdIconRegistry,
                log_service_1.LogService]
        }), 
        __metadata('design:paramtypes', [log_service_1.LogService, router_deprecated_1.RouteParams, notification_service_1.NotificationService, router_deprecated_2.Router])
    ], LogMessagingComponent);
    return LogMessagingComponent;
}());
exports.LogMessagingComponent = LogMessagingComponent;
//# sourceMappingURL=../../log-messaging.component.js.map