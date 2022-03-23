import { SharedModule } from './../../shared/shared.module';
import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasAgendamentoContainerComponent } from './containers/consultas-agendamento-container/consultas-agendamento-container.component';


@NgModule({
  declarations: [
       ConsultasAgendamentoContainerComponent
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    SharedModule,

  ]
})
export class ConsultasModule { }
