import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EspecialidadesService } from 'src/app/modules/especialidades/services/especialidades.service';
import { Especialidade } from './../../../../models/especialidade';
import { GradeConsulta, GradeRequest } from './../../../../models/gradeConsulta';
import { GradesService } from './../../services/grades.service';

@Component({
  selector: 'app-manter-grades',
  templateUrl: './manter-grades.component.html',
  styleUrls: ['./manter-grades.component.scss']
})
export class ManterGradesComponent implements OnInit {


  especialidades: Especialidade[] = [];
  grades: GradeConsulta[];
  form: FormGroup;
  display: boolean = false;

  constructor(private gradesService: GradesService, private fb: FormBuilder, private especialidadesService: EspecialidadesService) {
    this.listarEspecialidades();
    this.listarGrades();
    this.initForm();
  }

  listarEspecialidades() {
    this.especialidadesService.list().subscribe(
      data => { this.especialidades = data; }
    );
  }

  listarGrades() {
    this.gradesService.listAllByMedico(4).subscribe(
      data => this.grades = data
    );
  }

  initForm() {
    this.form = this.fb.group({
      id: this.fb.control(null),
      medicoId: this.fb.control(4),
      espId: this.fb.control(''),
      valor: this.fb.control(0.00)
    });
  }

  onAdd() {
    let grade: GradeRequest = { ... this.form.value };
    this.gradesService.add(grade).subscribe(
      () => {
        this.listarGrades();
        this.initForm();
      }
    );
  }

  showDialog() {
    this.display = true;
  }

  ngOnInit(): void {
  }

}
