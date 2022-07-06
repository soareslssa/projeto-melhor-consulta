import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Consulta } from 'src/app/models/consulta';
import { ConsultasService } from '../../services/consultas.service';
import { ConsultaRequest } from './../../../../models/consulta';
import { GradeConsulta } from './../../../../models/gradeConsulta';

@Component({
  selector: 'app-agendar-consultas',
  templateUrl: './agendar-consultas.component.html',
  styleUrls: ['./agendar-consultas.component.scss']
})
export class AgendarConsultasComponent implements OnInit {

  consultas: Consulta[];

  constructor(private consultasService: ConsultasService, private confirmationService: ConfirmationService
    , private toast: MessageService) { }

  ngOnInit(): void { }

  listarConsultasParaAgendamento(grade: GradeConsulta) {
    this.consultasService.listarConsultasLivresPorMedicoGrade(grade.medico.id, grade.id).subscribe(
      data => { this.consultas = data }
    );
  }

  agendarConsulta(consulta: Consulta) {
    this.confirmationService.confirm({
      message: "Tem certeza que deseja agendar este Horário?",
      accept: () => {
        let request: ConsultaRequest = { id: consulta.id, gradeId: consulta.gradeConsulta.id, pacienteId: 10 , situacao: 'M'};
        this.consultasService.agendarConsulta(request)
          .subscribe(data =>
            this.showMessage("Consulta agendada com sucesso!")
            ,
            error => (this.showError("Erro ao agendar consulta!", "Entre em contato com o consultório!"))
          )
      }
    });
  }

  showMessage(msg: string) {
    this.toast.add({ severity: 'success', summary: msg })
  }

  showError(msg: string, detail: string) {
    this.toast.add({ severity: 'error', summary: msg, detail: detail })
  }


}
