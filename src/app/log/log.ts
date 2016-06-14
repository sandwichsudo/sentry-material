export class Log {
  id: number;
  name: string;
  priority: number;
  hexid: string;
  base64id: string;
  authority: string;
  bugUrl: string;
  contactDetails: Array<number>;
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
        iconText = 'info outline';
        break;
      case 1:
        iconText = 'warning outline';
        break;
      case 2:
        iconText = 'error outline';
        break;
      default:
        iconText = 'lock outline';
    }
    return iconText;

  }
}
