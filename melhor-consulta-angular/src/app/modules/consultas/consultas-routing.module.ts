import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarConsultasComponent } from './containers/agendar-consultas/agendar-consultas.component';
import { ManterConsultasComponent } from './containers/manter-consultas/manter-consultas.component';

const routes: Routes = [
  { path: '', component: AgendarConsultasComponent},
  { path: 'manter', component: ManterConsultasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
