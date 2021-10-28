import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';
import { DetallesComponent } from './detalles/detalles.component';
import { InicioComponent } from './inicio/inicio.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      { path: '', component: InicioComponent },
      { path: 'usuario/:id', pathMatch: 'full', component: DetallesComponent },
      {
        path: 'buscador/usuarios',
        pathMatch: 'full',
        component: BuscadorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
