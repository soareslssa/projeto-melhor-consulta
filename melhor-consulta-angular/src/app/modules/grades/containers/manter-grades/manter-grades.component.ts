import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Especialidade } from './../../../../models/especialidade';
import { GradeRequest } from './../../../../models/gradeConsulta';
import { EspecialidadesService } from './../../../consultas/services/especialidades.service';
import { GradesService } from './../../services/grades.service';

@Component({
  selector: 'app-manter-grades',
  templateUrl: './manter-grades.component.html',
  styleUrls: ['./manter-grades.component.scss']
})
export class ManterGradesComponent implements OnInit {


  especialidades: Especialidade[] = [];
  form: FormGroup;

  constructor(private gradesService: GradesService, private fb: FormBuilder, private especialidadesService: EspecialidadesService) {
    this.listarEspecialidades();
    this.initForm();
  }

  listarEspecialidades() {
    this.especialidadesService.list().subscribe(
      data => { this.especialidades = data; }
    );
  }

  initForm() {
    this.form = this.fb.group({
      id: this.fb.control(null),
      espId: this.fb.control(''),
      dtConsulta: this.fb.control([]),
      hrInicio: this.fb.control(''),
      hrFim: this.fb.control(''),
      tempoConsulta: this.fb.control('1'),
      medicoId: this.fb.control(4)
    });
  }

  onAdd() {
    let grade: GradeRequest = { ... this.form.value };
    this.gradesService.add(grade).subscribe();
  }

  ngOnInit(): void {
  }

}
