import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { DetallesComponent } from './detalles/detalles.component';


@NgModule({
  imports: [
    WelcomeRoutingModule,
    FormsModule,
    CommonModule,
    NzSpinModule,
    NzPaginationModule
  ],
  declarations: [WelcomeComponent, InicioComponent, DetallesComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
