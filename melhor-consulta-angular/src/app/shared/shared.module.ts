import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppPrimengModule } from './app-primeng/app-primeng.module';

@NgModule({

  imports: [CommonModule, AppPrimengModule, AppMaterialModule,FormsModule, ReactiveFormsModule],
  exports: [ AppMaterialModule, AppPrimengModule, ReactiveFormsModule, FormsModule],
  providers: [
    ConfirmationService
  ]
})
export class SharedModule {}
