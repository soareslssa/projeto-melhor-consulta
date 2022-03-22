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



  myControl = new FormControl();
  options = [];
  filteredOptions: Observable<Especialidade[]>;

  @ViewChild(ConsultasTableComponent)
  tabelaConsultas!: ConsultasTableComponent;

  constructor(private especialidadeService: EspecialidadesService){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
            return this.filter(val || '')
       })
    )
  }

  buscarConsultasPorEspecialidade(espId: number): void{
    this.tabelaConsultas.pesquisarConsultasPorEspecialidade(espId)
  }

  ngOnInit() {
  }

  filter(param: string): Observable<Especialidade[]> {
    return this.especialidadeService.list()
     .pipe(
       map(response => response.filter(option => {
         return option.nome.toLowerCase().indexOf(param.toLowerCase()) === 0
       }))
     )
   }
}

