import { Component } from '@angular/core';

//log components
import {LogService} from './log.service/log.service';
import {LogsComponent} from './logs/logs.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogDetailComponent } from './log-detail/log-detail.component';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';

@Component({
  moduleId: module.id,
  selector: 'test-ng-mat-2-app',
  templateUrl: 'test-ng-mat-2.component.html',
  styleUrls: ['test-ng-mat-2.component.css', 'app.component.css'],
  directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
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
  subtitle = 'Certificate transparency log monitoring app.';
}
