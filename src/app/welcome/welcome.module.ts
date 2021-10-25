import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';

import { DetallesComponent } from './detalles/detalles.component';
import { CardComponent } from './components/card/card.component';

import {
  AccountBookFill,
  AlertFill,
  AlertOutline,
  RollbackOutline,
  EditTwoTone,
  DeleteOutline,
  DownCircleFill,
  EnterOutline,
  UserOutline,
} from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [
  AccountBookFill,
  AlertOutline,
  AlertFill,
  RollbackOutline,
  EditTwoTone,
  DeleteOutline,
  DownCircleFill,
  EnterOutline,
  UserOutline,
];

@NgModule({
  imports: [
    WelcomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NzSpinModule,
    NzPaginationModule,
    NzCardModule,
    NzTableModule,
    NzGridModule,
    NzDividerModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    NzModalModule,
    NzIconModule.forChild(icons),
  ],
  declarations: [
    WelcomeComponent,
    InicioComponent,
    DetallesComponent,
    CardComponent,
  ],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
