import { Component, OnInit } from '@angular/core';

import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-modal',
  // templateUrl: './modal.component.html',
  template: `
    <button nz-button [nzType]="'primary'" (click)="createBasicNotification()">Open the notification box</button>
`,
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private notification: NzNotificationService) {}

  ngOnInit(): void {
  }

  createBasicNotification(): void {
    this.notification
      .blank(
        'Notification Title',
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      )
      .onClick.subscribe(() => {
        console.log('notification clicked!');
      });
  }

}
