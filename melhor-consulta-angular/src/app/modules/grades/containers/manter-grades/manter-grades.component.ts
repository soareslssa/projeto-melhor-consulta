import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Especialidade } from './../../../../models/especialidade';
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

  constructor(private gradesService: GradesService, private fb : FormBuilder, private especialidadesService: EspecialidadesService) {
    this.listarEspecialidades();
    this.initForm();
  }

  listarEspecialidades() {
    this.especialidadesService.list().subscribe(
      data => { this.especialidades = data; }
    );
  }

  initForm(){
    this.form = this.fb.group({
      especialidade: this.fb.control(''),
      dtConsulta: this.fb.control([]),
      hrInicio: this.fb.control(''),
      hrFim: this.fb.control(''),
      tempoConsulta: this.fb.control(''),
      medico: this.fb.control('')
    });
  }

  onAdd(){
    console.log(this.form.value);
  }

  ngOnInit(): void {
  }

}
