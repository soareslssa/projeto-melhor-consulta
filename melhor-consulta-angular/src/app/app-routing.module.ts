import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo: 'consultas'},
  { path: 'consultas',
    loadChildren: () => import('./modules/consultas/consultas.module').then(m => m.ConsultasModule)
  },
  {path: 'medicos',loadChildren: () => import('./modules/medicos/medicos.module').then(m => m.MedicosModule)},
  {path: 'login', loadChildren: () => import('./modules/seguranca/seguranca.module').then(m => m.SegurancaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
