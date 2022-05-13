import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Consulta } from 'src/app/models/consulta';
import { ConsultasService } from '../../services/consultas.service';
import { GradeConsulta } from './../../../../models/gradeConsulta';

@Component({
  selector: 'app-agendar-consultas',
  templateUrl: './agendar-consultas.component.html',
  styleUrls: ['./agendar-consultas.component.scss']
})
export class AgendarConsultasComponent implements OnInit {

  consultas: Consulta[];

  constructor(private consultasService: ConsultasService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void { }

  listarConsultasParaAgendamento(grade: GradeConsulta) {
    this.consultasService.listAllByMedicoGradeSituacao(grade.medico.id, grade.id, 'L').subscribe(
      data => { this.consultas = data }
    );
  }

}
