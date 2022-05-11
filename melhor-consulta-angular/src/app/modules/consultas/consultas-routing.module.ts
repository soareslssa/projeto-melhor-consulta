import { ManterConsultasComponent } from './containers/consultas-agendamento-container/manter-consultas/manter-consultas.component';
import { ConsultasAgendamentoContainerComponent } from './containers/consultas-agendamento-container/consultas-agendamento-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ConsultasAgendamentoContainerComponent},
  { path: 'manter', component: ManterConsultasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
