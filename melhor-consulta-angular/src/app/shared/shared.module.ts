import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultasTableComponent } from './components/consultas-table/consultas-table.component';



@NgModule({
  declarations: [
    ConsultasTableComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ConsultasTableComponent
  ]
})
export class SharedModule { }
