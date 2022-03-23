import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Consulta } from './../../../models/consulta';
import { ConsultasService } from './../../../modules/consultas/services/consultas.service';

@Component({
  selector: 'app-consultas-table',
  templateUrl: './consultas-table.component.html',
  styleUrls: ['./consultas-table.component.scss'],
})
export class ConsultasTableComponent implements OnInit {
  listaConsultas!: Consulta[];
  dataSource = new MatTableDataSource<Consulta>();

  displayedColumns: string[] = [
    'codigo',
    'especialidade',
    'dtConsulta',
    'medico',
    'agendar',
  ];

  constructor(private consultasService: ConsultasService) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.consultasService.list().subscribe((res) => {
      this.dataSource.data = res as Consulta[];
    });
  }
}
