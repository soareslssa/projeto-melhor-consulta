import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppPrimengModule } from './app-primeng/app-primeng.module';
import { ConsultasTableComponent } from './components/consultas-table/consultas-table.component';

@NgModule({
  declarations: [ConsultasTableComponent],
  imports: [CommonModule, AppPrimengModule, AppMaterialModule,FormsModule],
  exports: [ConsultasTableComponent, AppMaterialModule, AppPrimengModule],
})
export class SharedModule {}
