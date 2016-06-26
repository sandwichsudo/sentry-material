import { Component } from '@angular/core';

//log components
import {LogService} from './log.service/log.service';
import {LogsComponent} from './logs/logs.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogDetailComponent } from './log-detail/log-detail.component';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { MessageComponent } from './message/message.component';
import { LogMessagingComponent } from './log-messaging/log-messaging.component';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css', 'app.component.css'],
  directives: [MessageComponent, ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdIcon],
  providers: [MdIconRegistry,
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
  }, {
    path: '/notify/:id',
    name: 'LogMessaging',
    component: LogMessagingComponent
  }
])

export class TestNgMat2AppComponent {
  title = 'Sentry';
}
