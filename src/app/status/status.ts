export class Status {
  priority: number;

  constructor(jsonOb) {
    for (let prop in jsonOb) {
      if (jsonOb.hasOwnProperty(prop)) {
        this[prop] = jsonOb[prop];
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
}
