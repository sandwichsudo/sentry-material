"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var status_1 = require('../status/status');
var Log = (function (_super) {
    __extends(Log, _super);
    function Log(jsonLog) {
        _super.call(this, jsonLog);
    }
    Log.prototype.getStatusMessage = function () {
        var messageText;
        switch (this.priority) {
            case 0:
                messageText = 'This log\'s availability has dropped.';
                break;
            case 1:
                messageText = 'This log has failed it\'s probationary monitoring.';
                break;
            case 2:
                messageText = 'This log has breached availability requirements.';
                break;
            case 3:
                messageText = 'This log has breached minimum merge delay requirements.';
                break;
            default:
                messageText = 'This log is working normally.';
        }
        return messageText;
    };
    return Log;
}(status_1.Status));
exports.Log = Log;
//# sourceMappingURL=../../log.js.map