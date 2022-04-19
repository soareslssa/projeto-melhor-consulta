import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { AcessoUsuarioComponent } from './containers/acesso-usuario/acesso-usuario.component';
import { SegurancaRoutingModule } from './seguranca-routing.module';



@NgModule({
  declarations: [
    AcessoUsuarioComponent
  ],
  imports: [
    CommonModule,
    SegurancaRoutingModule,
    SharedModule
  ]
})
export class SegurancaModule { }
