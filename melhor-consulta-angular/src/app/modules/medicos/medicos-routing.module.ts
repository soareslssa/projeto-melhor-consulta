import { CadastrarMedicosComponent } from '../medicos/containers/cadastrar-medicos/cadastrar-medicos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: 'cadastrar', component: CadastrarMedicosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule { }
