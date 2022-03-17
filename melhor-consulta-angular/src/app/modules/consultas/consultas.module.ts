import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ConsultasPesquisaContainerComponent } from './containers/consultas-pesquisa-container/consultas-pesquisa-container.component';


@NgModule({
  declarations: [
       ConsultasPesquisaContainerComponent
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ConsultasModule { }
