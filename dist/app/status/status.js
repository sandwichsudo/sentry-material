"use strict";
var Status = (function () {
    function Status(jsonOb) {
        for (var prop in jsonOb) {
            if (jsonOb.hasOwnProperty(prop)) {
                this[prop] = jsonOb[prop];
            }
        }
    }
    Status.prototype.getStatusClass = function () {
        var statusClass;
        switch (this.priority) {
            case 0:
                statusClass = 'info';
                break;
            case 1:
                statusClass = 'warning';
                break;
            case 2:
                statusClass = 'error';
                break;
            case 3:
                statusClass = 'error';
                break;
            default:
                statusClass = 'working';
        }
        return statusClass;
    };
    Status.prototype.getIcon = function () {
        var iconText;
        switch (this.priority) {
            case 0:
                iconText = 'info';
                break;
            case 1:
                iconText = 'warning';
                break;
            case 2:
                iconText = 'error';
                break;
            case 3:
                iconText = 'error';
                break;
            default:
                iconText = 'check_circle';
        }
        return iconText;
    };
    return Status;
}());
exports.Status = Status;
//# sourceMappingURL=../../status.js.map