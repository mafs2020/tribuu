import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: async () =>
      (await import('./welcome/welcome.module')).WelcomeModule,
  },
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: '**', pathMatch: 'full', redirectTo: '/welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
