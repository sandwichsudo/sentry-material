import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
  selector: 'line-chart-demo',
  templateUrl: './app/graph/graph.html',
  styleUrls: ['./app/graph/graph.css'],
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class LineChartDemoComponent {
  // lineChart
  public lineChartData:Array<any> = [
    {data: [99.4, 99.6, 99.5, 99.5, 99.4, 99.3, 99.2], label: 'Series A'}
  ];
  public lineChartLabels:Array<any> = ['13:51', '13:52', '13:53', '13:54', '13:55', '13:56', '13:57'];
  public lineChartOptions:any = {
    animation: false,
    responsive: true
  };
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
}
