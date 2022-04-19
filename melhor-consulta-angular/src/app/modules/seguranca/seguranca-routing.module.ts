import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoUsuarioComponent } from './containers/acesso-usuario/acesso-usuario.component';

const routes: Routes = [
  {path: '', component: AcessoUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegurancaRoutingModule { }
