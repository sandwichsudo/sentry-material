    import { Injectable } from '@angular/core';
    import { BehaviorSubject }    from 'rxjs/BehaviorSubject';
    import { Notification } from '../notification/notification';

    @Injectable()
    export class NotificationService {
      // Observable string sources
      private notificationSource = new BehaviorSubject<Notification>(new Notification({message:"test", priority:-1}));
      notifications$ = this.notificationSource.asObservable();

      newNotification(message: string, priority: number) {
        this.notificationSource.next(new Notification({ message, priority }));
      }

    }
