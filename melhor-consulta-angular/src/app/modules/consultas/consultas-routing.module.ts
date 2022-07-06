import { ConsultasPacienteComponent } from './containers/consultas-paciente/consultas-paciente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarConsultasComponent } from './containers/agendar-consultas/agendar-consultas.component';
import { ManterConsultasComponent } from './containers/manter-consultas/manter-consultas.component';
import { VisualizarConsultasComponent } from './containers/visualizar-consultas/visualizar-consultas.component';

const routes: Routes = [
  { path: '', component: VisualizarConsultasComponent},
  { path: 'manter', component: ManterConsultasComponent},
  { path: 'agendar', component: AgendarConsultasComponent},
  { path: 'consultas-paciente', component: ConsultasPacienteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
