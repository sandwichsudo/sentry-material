import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Log } from '../log/log';
import { LogService } from '../log.service/log.service';

@Component({
  selector: 'my-log-detail',
  styleUrls: ['./app/log-detail/log-detail.component.css'],
  templateUrl: './app/log-detail/log-detail.component.html'

})
export class LogDetailComponent implements OnInit {
  log: Log;

  constructor(
    private logService: LogService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.logService.getLog(id)
      .then(log => this.log = log);
  }

  goBack() {
    window.history.back();
  }

}
