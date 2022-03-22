import { Especialidade } from 'src/app/models/especialidade';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Consulta } from './../../../models/consulta';
import { ConsultasService } from './../../../modules/consultas/services/consultas.service';

@Component({
  selector: 'app-consultas-table',
  templateUrl: './consultas-table.component.html',
  styleUrls: ['./consultas-table.component.scss'],
})
export class ConsultasTableComponent implements OnInit {
  dataSource$: Observable<Consulta[]>;

  displayedColumns: string[] = ['codigo', 'especialidade', 'dtConsulta', 'medico','acoes'];

  @ViewChild(MatTable)
  tabelaConsultas!: MatTable<any>;

  constructor(private consultasService: ConsultasService){
    this.dataSource$ = new Observable;
  }

  pesquisarConsultasPorEspecialidade(espId: number){
    this.dataSource$ = this.consultasService.listByEspecialidadeId(espId);
  }

  ngOnInit(){

  }
}




const ELEMENT_DATA: Consulta[] = [
  {
    id: 1,
    codigo: "123",
    paciente: 0,
    medico: {id:1, nome: "Dr João Santos"},
    especialidade: {id:1,nome:"Cardiologia"},
    dtConsulta: "23-03-2022",
    situacao: true
  },
  {
    id: 2,
    codigo: "321",
    paciente: 0,
    medico: {id:1, nome: "Dr Marcos Paulo"},
    especialidade: {id:1,nome:"Cardiologia"},
    dtConsulta: "23-03-2022",
    situacao: true
  }
];
