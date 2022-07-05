import { ConsultasService } from './../../../consultas/services/consultas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EspecialidadesService } from 'src/app/modules/especialidades/services/especialidades.service';
import { Especialidade } from './../../../../models/especialidade';
import { GradeConsulta, GradeHorarioRequest, GradeRequest } from './../../../../models/gradeConsulta';
import { GradesService } from './../../services/grades.service';
import { Router } from '@angular/router';

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
  gerarHorariosDisplay: boolean = false;
  gradeSelecionada: GradeConsulta;
  datasDisponiveis: Array<String>;
  datasInvalidas: Array<Date>;



  constructor(private gradesService: GradesService, private fb: FormBuilder, private especialidadesService: EspecialidadesService,
    private consultasService: ConsultasService,  private router: Router) {
    this.listarEspecialidades();
    this.listarGrades();
    this.initForm();

    let today = new Date();
    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.datasInvalidas = [today,invalidDate];
  }

  listarEspecialidades() {
    this.especialidadesService.list().subscribe(
      data => { this.especialidades = data; }
    );
  }

  listarGrades() {
    this.gradesService.listAllByMedico(4).subscribe(
      data => { this.grades = data;}
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

  showDialogGerarHorarios(grade: GradeConsulta) {
    this.gradeSelecionada = grade;
    this.gerarHorariosDisplay = true;

  }

  gerarHorariosDeAgendamento() {

    let horarios = {} as GradeHorarioRequest;
    horarios.datasDisponiveis = ['11-07-22','12-07-22','13-07-22','14-07-22'];
    horarios.gradeId = this.gradeSelecionada.id;
    horarios.espId = this.gradeSelecionada.especialidade.id;

    this.consultasService.gerarHorarios(horarios).subscribe(_result =>{
      this.router.navigate(['/grades']);
    }
    );

  }

  ngOnInit(): void {

  }

}
