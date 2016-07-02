import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Log } from '../log/log';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LogService {
  private logsUrl = 'app/logs';  // URL to web api
  private availibilityGraphsUrl = 'app/availibilityGraphs';
  private mmdGraphsUrl = 'app/mmdGraphs';

  constructor(private http: Http) { }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getLogs(): Promise<Log[]> {
    return this.http.get(this.logsUrl)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  getAvailibilityGraphs(): Promise<Number[]> {
    return this.http.get(this.availibilityGraphsUrl)
      .toPromise()
      .then(response => {
      return response.json().data;})
      .catch(this.handleError);
  }
  getMMDGraphs(): Promise<Number[]> {
    return this.http.get(this.mmdGraphsUrl)
      .toPromise()
      .then(response => {
      return response.json().data;})
      .catch(this.handleError);
  }

  getLog(id: number) {
    return this.getLogs()
      .then(logs => logs.filter(log => log.id === id)[0]);
  }

}
