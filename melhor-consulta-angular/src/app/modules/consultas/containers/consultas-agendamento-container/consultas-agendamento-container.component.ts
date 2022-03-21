import { EspecialidadesService } from './../../services/especialidades.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs';
import { startWith } from 'rxjs';
import { Observable } from 'rxjs';
import { Especialidade } from 'src/app/models/especialidade';

@Component({
  selector: 'app-consultas-agendamento-container',
  templateUrl: './consultas-agendamento-container.component.html',
  styleUrls: ['./consultas-agendamento-container.component.scss']
})
export class ConsultasAgendamentoContainerComponent implements OnInit {

  constructor(private especialidadeService: EspecialidadesService){

  }

  options: Especialidade[] = this.especialidadeService.list();

  myControl = new FormControl();
  filteredOptions!: Observable<Especialidade[]>;

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

