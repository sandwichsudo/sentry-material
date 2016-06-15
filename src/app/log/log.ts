import {Status} from '../status/status';
export class Log extends Status{
  id: number;
  name: string;
  priority: number;
  hexid: string;
  base64id: string;
  authority: string;
  bugUrl: string;
  contactDetails: string[];
  constructor(jsonLog) {
    super(jsonLog);
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
