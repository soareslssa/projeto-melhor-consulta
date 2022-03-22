import { EspecialidadesService } from './../../services/especialidades.service';
import { Especialidade } from './../../../../models/especialidade';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-consultas-agendamento-container',
  templateUrl: './consultas-agendamento-container.component.html',
  styleUrls: ['./consultas-agendamento-container.component.scss']
})

export class ConsultasAgendamentoContainerComponent implements OnInit {

  myControl = new FormControl();
  options: Especialidade[] = [];
  filteredOptions!: Observable<Especialidade[]>;

  constructor(private especialidadeService: EspecialidadesService){
    this.especialidadeService.list().subscribe(options => this.options = options);
    console.log(this.especialidadeService.list());
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
  }

  displayFn(esp: Especialidade): string {
    return esp && esp.nome ? esp.nome : '';
  }

  private _filter(name: string): Especialidade[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.nome.toLowerCase().includes(filterValue));
  }
}

