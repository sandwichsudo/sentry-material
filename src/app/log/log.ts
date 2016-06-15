export class Log {
  id: number;
  name: string;
  priority: number;
  hexid: string;
  base64id: string;
  authority: string;
  bugUrl: string;
  contactDetails: string[];
  constructor(jsonLog) {
    for (let prop in jsonLog) {
      if (jsonLog.hasOwnProperty(prop)) {
        this[prop] = jsonLog[prop];
      }
    }
  }
  getStatusClass(): string {
    var statusClass: string;
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
      default:
        statusClass = 'working';
    }
    return statusClass;
  }
  getIcon(): string {
    var iconText: string;
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
      default:
        iconText = 'check_circle';
    }
    return iconText;
  }
  getStatusMessage(): string {
    var messageText: string;
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
      default:
        messageText = 'This log is working normally.';
    }
    return messageText;
  }
}
