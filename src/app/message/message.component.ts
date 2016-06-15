import { Component, OnDestroy, OnInit } from '@angular/core';

import { Notification } from '../notification/notification';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { Subscription }   from 'rxjs/Subscription';
import { NotificationService } from '../notification.service/notification.service';

@Component({
  selector: 'message-container',
  styleUrls: ['./app/message/message.component.css'],
  templateUrl: './app/message/message.component.html',
  directives: [MdIcon],
  providers: [MdIconRegistry]

})
export class MessageComponent implements OnDestroy, OnInit {
  notification: Notification;
  subscription: Subscription;
  constructor(
    private notificationService: NotificationService) {
    this.notificationService = notificationService;
  }
  ngOnInit() {
    this.subscription = this.notificationService.notifications$.subscribe(
      notification => {
        this.displayMessage(notification);
      }, err => console.log(err), () => console.log("completed: "));
  }

  displayMessage(notification: Notification) {
    this.notification = notification;
    window.setTimeout(() => { this.notification = null }, 3000);
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
