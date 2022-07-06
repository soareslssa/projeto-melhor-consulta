import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { EspecialidadesService } from 'src/app/modules/especialidades/services/especialidades.service';
import { Especialidade } from './../../../../models/especialidade';
import {
  GradeConsulta,
  GradeHorarioRequest,
  GradeRequest,
} from './../../../../models/gradeConsulta';
import { ConsultasService } from './../../../consultas/services/consultas.service';
import { GradesService } from './../../services/grades.service';

@Component({
  selector: 'app-manter-grades',
  templateUrl: './manter-grades.component.html',
  styleUrls: ['./manter-grades.component.scss'],
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

  constructor(
    private gradesService: GradesService,
    private fb: FormBuilder,
    private especialidadesService: EspecialidadesService,
    private consultasService: ConsultasService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.listarEspecialidades();
    this.listarGrades();
    this.initForm();

    let today = new Date();
    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.datasInvalidas = [today, invalidDate];
  }

  listarEspecialidades() {
    this.especialidadesService.list().subscribe((data) => {
      this.especialidades = data;
    });
  }

  listarGrades() {
    this.gradesService.listAllByMedico(4).subscribe((data) => {
      this.grades = data;
    });
  }

  initForm() {
    this.form = this.fb.group({
      id: this.fb.control(null),
      medicoId: this.fb.control(4),
      espId: this.fb.control('').setValidators(Validators.required),
      valor: this.fb.control(0.0).setValidators(Validators.required),
    });
  }

  onAdd() {
    let grade: GradeRequest = { ...this.form.value };
    this.gradesService.add(grade).subscribe(
      () => {
        this.listarGrades();
        this.initForm();
        this.showMessage('Grade cadastrada com sucesso!');
      },
      (error) => this.showError('Atenção!')
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
    horarios.datasDisponiveis = ['11-07-22', '12-07-22'];
    horarios.gradeId = this.gradeSelecionada.id;
    horarios.espId = this.gradeSelecionada.especialidade.id;

    this.consultasService.gerarHorarios(horarios).subscribe(
      (_result) => {
        this.gerarHorariosDisplay = false;
        this.router.navigate([this.router.url]);

        this.showMessage('Horários gerados com sucesso!');
      },
      (error) => this.showError('Erro ao gerar horários')
    );
  }

  ativarInativarGrade(grade: GradeConsulta) {
    grade.situacao = !grade.situacao;
    this.gradesService.atualizarGrade(grade).subscribe((data) => {
      this.showMessage('Grade atualizada com sucesso!');
      this.listarGrades();
    });
  }

  showMessage(msg: string) {
    this.messageService.add({ severity: 'success', summary: msg });
  }

  showError(msg: string) {
    this.messageService.add({
      severity: 'error',
      summary: msg,
      detail: 'Campos obrigatórios não preenchidos',
    });
  }

  ngOnInit(): void {}
}
