import { Injectable } from '@angular/core';

import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private notification: NzNotificationService) {}

  createBasicNotification(): void {
    this.notification
      .error(
        'Error',
        'Ocurrio un Error Intentar Mas tarde.'
      )
      .onClick.subscribe(() => {
        console.log('notification clicked!');
      });
  }
}
