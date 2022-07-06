import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ConsultasService } from '../../services/consultas.service';
import { Consulta } from './../../../../models/consulta';

@Component({
  selector: 'app-manter-consultas',
  templateUrl: './manter-consultas.component.html',
  styleUrls: ['./manter-consultas.component.scss'],
})
export class ManterConsultasComponent implements OnInit {
  consultas: Consulta[];

  constructor(
    private consultasService: ConsultasService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.obterConsultas();
  }

  obterConsultas() {
    this.consultasService.list().subscribe((data) => {
      this.consultas = data;
    });
  }

  pesquisarConsultasPorGrade(gradeId: number) {
    this.consultasService
      .listAllByMedicoGradeSituacao(4, gradeId)
      .subscribe((data) => (this.consultas = data));
  }

  onDelete(consulta: Consulta) {
    if (consulta.situacao == 'L') {
      this.confirmationService.confirm({
        message: 'Tem certeza que deseja excluir este Horário?',
        accept: () => {
          this.consultasService
            .delete(consulta.id)
            .subscribe((data) => this.obterConsultas());
        },
      });
    } else {
      this.confirmationService.confirm({
        message: 'Tem certeza que deseja desmarcar esta consulta?',
        accept: () => {
          this.consultasService
            .desmarcar(consulta.id)
            .subscribe(data =>{ this.obterConsultas()});
        },
      });
    }
  }
}
