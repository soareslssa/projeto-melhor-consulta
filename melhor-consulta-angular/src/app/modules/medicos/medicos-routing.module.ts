import { DadosProfissionaisMedicosComponent } from './containers/cadastrar-medicos/dados-profissionais-medicos/dados-profissionais-medicos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CadastrarMedicosComponent } from '../medicos/containers/cadastrar-medicos/cadastrar-medicos.component';
import { DadosPessoaisMedicosComponent } from './containers/cadastrar-medicos/dados-pessoais-medicos/dados-pessoais-medicos.component';

const routes: Routes = [
  {path: 'cadastrar', component: CadastrarMedicosComponent,
  children: [
    {path: 'dados-pessoais-medicos',component: DadosPessoaisMedicosComponent},
    {path: 'dados-profissionais-medicos',component: DadosProfissionaisMedicosComponent}
]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule { }
