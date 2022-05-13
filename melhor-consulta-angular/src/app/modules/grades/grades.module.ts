import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { ConsultasModule } from './../consultas/consultas.module';
import { ManterGradesComponent } from './containers/manter-grades/manter-grades.component';
import { GradesRoutingModule } from './grades-routing.module';



@NgModule({
  declarations: [
    ManterGradesComponent,
  ],
  imports: [
    CommonModule,
    GradesRoutingModule,
    SharedModule,
    ConsultasModule
  ]
})
export class GradesModule { }
