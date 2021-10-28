import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { User } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-card',
  template: `
    <nz-card ng-col nzSpan="8" [nzTitle]="user.name">
      <p>Card content</p>
    </nz-card>
  `,
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input('user') user!: User;
  constructor() {}

  ngOnInit(): void {
    console.log(this.user);
  }
}
