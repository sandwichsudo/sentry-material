import { Component } from '@angular/core';
// material directives
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

//log components
import {LogService} from './log.service/log.service';
import {LogsComponent} from './logs/logs.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogDetailComponent } from './log-detail/log-detail.component';

@Component({
  moduleId: module.id,
  selector: 'test-ng-mat-2-app',
  templateUrl: 'test-ng-mat-2.component.html',
  styleUrls: ['test-ng-mat-2.component.css', 'app.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdIcon, ROUTER_DIRECTIVES],
  providers: [MdIconRegistry, ROUTER_PROVIDERS,
    LogService]

})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/logs',
    name: 'Logs',
    component: LogsComponent
  }, {
    path: '/detail/:id',
    name: 'LogDetail',
    component: LogDetailComponent
  }
])

export class TestNgMat2AppComponent {
  title = 'Sentry';
}
