import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MedicosRoutingModule } from '../medicos/medicos-routing.module';
import { SharedModule } from './../../shared/shared.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    SharedModule
  ]
})
export class MedicosModule { }
