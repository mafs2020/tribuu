import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { IncioComponent } from './incio/incio.component';

@NgModule({
  declarations: [
    PagesComponent,
    IncioComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
})
export class PagesModule { }
