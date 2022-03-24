import { Component, OnInit } from '@angular/core';
import { GradeConsulta } from './../../../models/gradeConsulta';
import { GradeConsultaService } from './../../../modules/consultas/services/grade-consulta.service';

@Component({
  selector: 'app-consultas-table',
  templateUrl: './consultas-table.component.html',
  styleUrls: ['./consultas-table.component.scss'],
})
export class ConsultasTableComponent implements OnInit {

  grades: GradeConsulta[] = [];


  ngOnInit() {
      this.gradeConsultaService.listarGrades().subscribe(data => this.grades = data);
  }

  constructor(private gradeConsultaService: GradeConsultaService) {}
}
