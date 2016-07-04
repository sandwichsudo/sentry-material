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
var icon_1 = require('@angular2-material/icon');
var notification_service_1 = require('../notification.service/notification.service');
var MessageComponent = (function () {
    function MessageComponent(notificationService) {
        this.notificationService = notificationService;
        this.notificationService = notificationService;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.notificationService.notifications$.subscribe(function (notification) {
            _this.displayMessage(notification);
        }, function (err) { return console.log(err); }, function () { return console.log("completed: "); });
    };
    MessageComponent.prototype.displayMessage = function (notification) {
        var _this = this;
        this.notification = notification;
        window.setTimeout(function () { _this.notification = null; }, 3000);
    };
    MessageComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'message-container',
            styleUrls: ['./app/message/message.component.css'],
            templateUrl: './app/message/message.component.html',
            directives: [icon_1.MdIcon],
            providers: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [notification_service_1.NotificationService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=../../message.component.js.map