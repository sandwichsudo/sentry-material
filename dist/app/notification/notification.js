"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var status_1 = require('../status/status');
var Notification = (function (_super) {
    __extends(Notification, _super);
    function Notification(jsonOb) {
        _super.call(this, jsonOb);
    }
    return Notification;
}(status_1.Status));
exports.Notification = Notification;
//# sourceMappingURL=../../notification.js.map