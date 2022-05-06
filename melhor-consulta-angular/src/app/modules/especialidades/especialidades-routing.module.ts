import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManterEspecialidadeComponent } from './conteiners/manter-especialidade/manter-especialidade.component';

const routes: Routes = [
  { path: 'manter', component: ManterEspecialidadeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecialidadeRoutingModule {}
