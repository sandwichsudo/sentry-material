import {Component, OnInit, Input} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import { LogService } from '../log.service/log.service';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import { Log } from '../log/log';

@Component({
  selector: 'line-chart-demo',
  templateUrl: './app/graph/graph.html',
  styleUrls: ['./app/graph/graph.css'],
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [LogService],
  inputs:['log']
})
export class LineChartDemoComponent implements OnInit{

    @Input() log;

  // lineChart
  public lineChartData;
  public lineChartLabels;
  public lineChartOptions:any = {
    animation: false,
    responsive: true
  };
  public graph;
  constructor(private logService: LogService){}

  public lineChartColours:Array<any> = [
    {
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: '#13dcba',
      pointBackgroundColor: '#f7fd44',
      pointBorderColor: '#13dcba',
      pointHoverBackgroundColor: '#13dcba',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      defaultFontColor: 'white'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  ngOnInit() {
    this.logService.getAvailibilityGraphs()
    .then(graphs => {
      this.graph = graphs[this.log.id];
      this.lineChartData = this.graph.availibility;
      this.lineChartLabels = this.graph.time;
    });
  }
}
