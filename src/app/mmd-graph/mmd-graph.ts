import {Component, OnInit, Input} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import { LogService } from '../log.service/log.service';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import { Log } from '../log/log';

@Component({
  selector: 'mmd-graph',
  templateUrl: './app/av-graph/av-graph.html',
  styleUrls: ['./app/av-graph/av-graph.css'],
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [LogService],
  inputs:['log']
})
export class MMDGraph implements OnInit{

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
      borderColor: '#b900ff',
      pointBackgroundColor: '#f7fd44',
      pointBorderColor: '#b900ff',
      pointHoverBackgroundColor: '#b900ff',
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
    this.logService.getMMDGraphs()
    .then(graphs => {
      this.graph = graphs[this.log.id];
      this.lineChartData = this.graph.mmd;
      this.lineChartLabels = this.graph.time;
    });
  }
}
