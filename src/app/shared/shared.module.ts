import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    ModalComponent
  ],
  exports: [ModalComponent],
  imports: [
    CommonModule,
    NzButtonModule
  ]
})
export class SharedModule { }
