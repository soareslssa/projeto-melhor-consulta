import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MedicosRoutingModule } from '../medicos/medicos-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { CadastroMedicosComponent } from './containers/cadastro-medicos/cadastro-medicos.component';



@NgModule({
  declarations: [
    CadastroMedicosComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    SharedModule
  ]
})
export class MedicosModule { }
