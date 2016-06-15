import {Status} from '../status/status';
export class Notification extends Status{
  message: string;
  priority: number;

  constructor(jsonOb) {
    super(jsonOb);
  }
}
