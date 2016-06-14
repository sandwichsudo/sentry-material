import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Log } from '../log/log';
import { LogService } from '../log.service/log.service';

@Component({
    selector: 'my-dashboard',
    styleUrls: ['./app/dashboard/dashboard.component.css'],
    templateUrl: './app/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    logs: Log[] = [];
    constructor(private router: Router, private logService: LogService) { }
    hasIssue(log: Log) {
      return log.priority > -1;
    }
    ngOnInit() {
        this.logService.getLogs()
            .then(logs => this.logs = logs.filter(this.hasIssue));
    }
    gotoDetail(log: Log) {
        let link = ['LogDetail', { id: log.id }];
        this.router.navigate(link);
    }

}
