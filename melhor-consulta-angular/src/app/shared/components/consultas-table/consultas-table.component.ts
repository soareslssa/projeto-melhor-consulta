import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Consulta } from './../../../models/consulta';
import { ConsultasService } from './../../../modules/consultas/services/consultas.service';

@Component({
  selector: 'app-consultas-table',
  templateUrl: './consultas-table.component.html',
  styleUrls: ['./consultas-table.component.scss'],
})
export class ConsultasTableComponent implements OnInit {

  consultas: Consulta[] = [];


  ngOnInit() {
      this.consultasService.list().subscribe(data => this.consultas = data);
  }

  constructor(private consultasService: ConsultasService) {}
}
