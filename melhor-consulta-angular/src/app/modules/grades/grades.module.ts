import { SharedModule } from './../../shared/shared.module';
import { GradesRoutingModule } from './grades-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManterGradesComponent } from './containers/manter-grades/manter-grades.component';



@NgModule({
  declarations: [
    ManterGradesComponent
  ],
  imports: [
    CommonModule,
    GradesRoutingModule,
    SharedModule
  ]
})
export class GradesModule { }
