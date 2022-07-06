import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { ConsultasRoutingModule } from './consultas-routing.module';
import { VisualizarConsultasComponent } from './containers/visualizar-consultas/visualizar-consultas.component';
import { ManterConsultasComponent } from './containers/manter-consultas/manter-consultas.component';
import { AgendarConsultasComponent } from './containers/agendar-consultas/agendar-consultas.component';
import { ConsultasPacienteComponent } from './containers/consultas-paciente/consultas-paciente.component';


@NgModule({
  declarations: [
       ManterConsultasComponent,
       VisualizarConsultasComponent,
       AgendarConsultasComponent,
       ConsultasPacienteComponent
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    SharedModule,
  ],
  exports: [
    AgendarConsultasComponent,
    ManterConsultasComponent,
    ConsultasPacienteComponent
  ]
})
export class ConsultasModule { }
