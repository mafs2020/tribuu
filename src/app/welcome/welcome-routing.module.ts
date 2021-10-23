import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';
import { InicioComponent } from './inicio/inicio.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { 
    path: '', 
    component: WelcomeComponent,
    children: [
      { path: '', component: InicioComponent },
      { path: ':id', component: DetallesComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
