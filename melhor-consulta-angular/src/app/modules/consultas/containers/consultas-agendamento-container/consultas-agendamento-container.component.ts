import { ConsultasTableComponent } from './../../../../shared/components/consultas-table/consultas-table.component';
import { EspecialidadesService } from './../../services/especialidades.service';
import { Especialidade } from './../../../../models/especialidade';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-consultas-agendamento-container',
  templateUrl: './consultas-agendamento-container.component.html',
  styleUrls: ['./consultas-agendamento-container.component.scss']
})

export class ConsultasAgendamentoContainerComponent implements OnInit {

  constructor(private especialidadeService: EspecialidadesService){

  }

  ngOnInit() {
  }

}

