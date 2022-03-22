import { Consulta } from './../../../models/consulta';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultas-table',
  templateUrl: './consultas-table.component.html',
  styleUrls: ['./consultas-table.component.scss'],
})
export class ConsultasTableComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'especialidade', 'dtConsulta', 'medico'];
  dataSource = ELEMENT_DATA;

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
