import { SharedModule } from './../../shared/shared.module';
import { EspecialidadeRoutingModule } from './especialidades-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManterEspecialidadeComponent } from './conteiners/manter-especialidade/manter-especialidade.component';



@NgModule({
  declarations: [
    ManterEspecialidadeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EspecialidadeRoutingModule
  ]
})
export class EspecialidadesModule { }
