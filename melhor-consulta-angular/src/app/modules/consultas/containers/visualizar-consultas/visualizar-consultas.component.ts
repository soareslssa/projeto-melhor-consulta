import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/models/estado';
import { GradeConsulta } from 'src/app/models/gradeConsulta';
import { GradesService } from 'src/app/modules/grades/services/grades.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-visualizar-consultas',
  templateUrl: './visualizar-consultas.component.html',
  styleUrls: ['./visualizar-consultas.component.scss']
})
export class VisualizarConsultasComponent implements OnInit {

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
