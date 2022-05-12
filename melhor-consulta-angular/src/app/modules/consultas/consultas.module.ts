import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { ConsultasRoutingModule } from './consultas-routing.module';
import { AgendarConsultasComponent } from './containers/agendar-consultas/agendar-consultas.component';
import { ManterConsultasComponent } from './containers/manter-consultas/manter-consultas.component';


@NgModule({
  declarations: [
       ManterConsultasComponent,
       AgendarConsultasComponent
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    SharedModule,

  ]
})
export class ConsultasModule { }
