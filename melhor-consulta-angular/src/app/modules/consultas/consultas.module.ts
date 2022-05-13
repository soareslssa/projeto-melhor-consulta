import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { ConsultasRoutingModule } from './consultas-routing.module';
import { VisualizarConsultasComponent } from './containers/visualizar-consultas/visualizar-consultas.component';
import { ManterConsultasComponent } from './containers/manter-consultas/manter-consultas.component';
import { AgendarConsultasComponent } from './containers/agendar-consultas/agendar-consultas.component';


@NgModule({
  declarations: [
       ManterConsultasComponent,
       VisualizarConsultasComponent,
       AgendarConsultasComponent
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    SharedModule,
  ],
  exports: [
    AgendarConsultasComponent,
    ManterConsultasComponent
  ]
})
export class ConsultasModule { }
