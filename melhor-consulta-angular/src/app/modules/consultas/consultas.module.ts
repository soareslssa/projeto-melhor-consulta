import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ConsultasAgendamentoContainerComponent } from './containers/consultas-agendamento-container/consultas-agendamento-container.component';


@NgModule({
  declarations: [
       ConsultasAgendamentoContainerComponent
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
