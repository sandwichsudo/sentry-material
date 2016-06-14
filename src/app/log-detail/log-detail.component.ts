import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Log } from '../log/log';
import { LogService } from '../log.service/log.service';

// material directives
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
  selector: 'my-log-detail',
  styleUrls: ['./app/log-detail/log-detail.component.css'],
  templateUrl: './app/log-detail/log-detail.component.html',
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdIcon],
  providers: [MdIconRegistry,
    LogService]

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
