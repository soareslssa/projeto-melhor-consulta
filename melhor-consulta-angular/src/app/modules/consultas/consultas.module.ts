import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { ConsultasRoutingModule } from './consultas-routing.module';
import { VisualizarConsultasComponent } from './containers/visualizar-consultas/visualizar-consultas.component';
import { ManterConsultasComponent } from './containers/manter-consultas/manter-consultas.component';


@NgModule({
  declarations: [
       ManterConsultasComponent,
       VisualizarConsultasComponent
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    SharedModule,
  ],
  exports: [
    ManterConsultasComponent
  ]
})
export class ConsultasModule { }
