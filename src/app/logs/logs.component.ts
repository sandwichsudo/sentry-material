import {Component, OnInit} from '@angular/core';
import { Log } from '../log/log';
import { LogDetailComponent } from '../log-detail/log-detail.component';
import { LogService } from '../log.service/log.service';
import { Router } from '@angular/router-deprecated';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
  selector: 'my-logs',
  templateUrl: './app/logs/logs.component.html',
  styleUrls: ['./app/logs/logs.component.css'],
  directives: [MdIcon],
  providers: [MdIconRegistry]
})
export class LogsComponent implements OnInit {
  logs: Log[];
  constructor(
    private router: Router,
    private logService: LogService) { }
  getLogs() {
    this.logService.getLogs().then(logs => {
      this.logs = new Array<Log>();
      for (var log of logs) {
        this.logs.push(new Log(log));
      }
    });
  }
  ngOnInit() {
    this.getLogs();
  }
  gotoDetail(id: number) {
    this.router.navigate(['LogDetail', { id: id }]);
  }
}
