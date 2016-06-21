    import { Injectable } from '@angular/core';
    import { Subject }    from 'rxjs/Subject';
    import { Notification } from '../notification/notification';

    @Injectable()
    export class NotificationService {
      // Observable string sources
      private notificationSource = new Subject<Notification>();
      notifications$ = this.notificationSource.asObservable();

      newNotification(message: string, priority: number) {
        this.notificationSource.next(new Notification({ message, priority }));
      }

    }
