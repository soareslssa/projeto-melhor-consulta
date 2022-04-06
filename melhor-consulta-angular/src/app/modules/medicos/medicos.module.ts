import { DadosPessoaisMedicosComponent } from './containers/cadastrar-medicos/dados-pessoais-medicos/dados-pessoais-medicos.component';
import { MedicosRoutingModule } from '../medicos/medicos-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarMedicosComponent } from './containers/cadastrar-medicos/cadastrar-medicos.component';
import { DadosProfissionaisMedicosComponent } from './containers/cadastrar-medicos/dados-profissionais-medicos/dados-profissionais-medicos.component';
import { ContatoMedicosComponent } from './containers/cadastrar-medicos/contato-medicos/contato-medicos.component';



@NgModule({
  declarations: [
    CadastrarMedicosComponent,
    DadosPessoaisMedicosComponent,
    DadosProfissionaisMedicosComponent,
    ContatoMedicosComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    SharedModule
  ]
})
export class MedicosModule { }
