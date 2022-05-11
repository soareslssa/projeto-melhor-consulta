import { Component, OnInit } from '@angular/core';
import { Estado } from './../../../models/estado';
import { GradeConsulta } from './../../../models/gradeConsulta';
import { GradesService } from './../../../modules/grades/services/grades.service';
import { UtilsService } from './../../services/utils.service';

@Component({
  selector: 'app-consultas-table',
  templateUrl: './consultas-table.component.html',
  styleUrls: ['./consultas-table.component.scss'],
})
export class ConsultasTableComponent implements OnInit {

  grades: GradeConsulta[] = [];
  estados: Estado[] = [];
  display: boolean = false;

  showDialog() {
      this.display = true;
  }


  ngOnInit() {
      this.gradesService.list().subscribe(data => this.grades = data);
      this.utilsService.listarEstados().subscribe(data => this.estados = data);
  }

  constructor(private gradesService: GradesService,
    private utilsService: UtilsService) {}
}
