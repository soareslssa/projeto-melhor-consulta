import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Consulta, ConsultaRequest } from 'src/app/models/consulta';
import { GradeConsulta } from 'src/app/models/gradeConsulta';
import { ConsultasService } from '../../services/consultas.service';

@Component({
  selector: 'app-consultas-paciente',
  templateUrl: './consultas-paciente.component.html',
  styleUrls: ['./consultas-paciente.component.scss']
})
export class ConsultasPacienteComponent implements OnInit {


  consultas: Consulta[];

  constructor(private consultasService: ConsultasService, private confirmationService: ConfirmationService
    , private toast: MessageService) {
      this.listarConsultasDoPaciente();
     }

  ngOnInit(): void { }

  listarConsultasDoPaciente() {
    this.consultasService.listarConsultasPorPaciente(10)
      .subscribe(data => { this.consultas = data },
        error => (this.showError("Erro ao buscar consultas!", "Entre em contato com o administrador")))
  }


  agendarConsulta(consulta: Consulta) {
    this.confirmationService.confirm({
      message: "Tem certeza que deseja agendar este Horário?",
      accept: () => {
        let request: ConsultaRequest = { id: consulta.id, gradeId: consulta.gradeConsulta.id, pacienteId: 10, situacao: 'M' };
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
