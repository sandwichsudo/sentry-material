import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { Router } from '@angular/router-deprecated';

import { Log } from '../log/log';
import { LogService } from '../log.service/log.service';
import { NotificationService } from '../notification.service/notification.service';

// material directives
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

//chart
 import {LineChartDemoComponent} from '../graph/graph';

@Component({
  selector: 'my-log-detail',
  styleUrls: ['./app/log-detail/log-detail.component.css'],
  templateUrl: './app/log-detail/log-detail.component.html',
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdIcon, LineChartDemoComponent],
  providers: [MdIconRegistry,
    LogService]

})
export class LogDetailComponent implements OnInit {
  log: Log;

  constructor(
    private logService: LogService,
    private routeParams: RouteParams,
    private router: Router, 
    private notificationService: NotificationService) {
    this.notificationService = notificationService;
  }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.logService.getLog(id)
      .then(log => {
        this.log = new Log(log);
      });
  }

  goBack() {
    window.history.back();
  }
  goToNotify(log: Log) {
    let link = ['LogMessaging', { id: log.id }];
    this.router.navigate(link);
  }
  copyToClipboard(idType: string) {
    let clipboardInfo = "";
    if (idType == 'base64id') {
      clipboardInfo = this.log.base64id;
    } else {
      clipboardInfo = this.log.hexid;
    }
    //get hidden input
    let input = <HTMLInputElement>document.querySelector(`[name=${idType}]`);
    //select text
    input.select();
    //copy to clipboard and generate notification
    try {
      document.execCommand('copy');
      console.log('copied');
      this.notificationService.newNotification("Copied to clipboard!", -1 );
    } catch (err) {
      console.log(err);
    }


  }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label:'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label:'Series B'}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
