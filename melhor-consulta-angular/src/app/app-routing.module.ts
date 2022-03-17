import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo: 'consultas'},
  { path: 'consultas',
    loadChildren: () => import('./consultas/consultas.module').then(m => m.ConsultasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
