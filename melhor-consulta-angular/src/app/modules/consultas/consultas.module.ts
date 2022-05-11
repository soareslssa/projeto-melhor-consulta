import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasAgendamentoContainerComponent } from './containers/consultas-agendamento-container/consultas-agendamento-container.component';
import { ManterConsultasComponent } from './containers/consultas-agendamento-container/manter-consultas/manter-consultas.component';


@NgModule({
  declarations: [
       ConsultasAgendamentoContainerComponent,
       ManterConsultasComponent
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    SharedModule,

  ]
})
export class ConsultasModule { }
