import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Consulta } from 'src/app/models/consulta';
import { ConsultasService } from '../../services/consultas.service';

@Component({
  selector: 'app-agendar-consultas',
  templateUrl: './agendar-consultas.component.html',
  styleUrls: ['./agendar-consultas.component.scss']
})
export class AgendarConsultasComponent implements OnInit {

  consultas: Consulta[];

  constructor(private consultasService: ConsultasService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.pesquisarConsultasLivresPorMedico(4)
   }

  pesquisarConsultasLivresPorMedico(medicoId: number) {
    this.consultasService.listAllByMedicoGradeSituacao(medicoId, null, "L").subscribe(
      data => { this.consultas = data; console.log(data); }
    );
  }

  onDelete(id: number) {
    /*  this.confirmationService.confirm({
       message: "Tem certeza que deseja excluir este Horário?",
       accept: () => {
         this.consultasService.delete(id).subscribe(data => this.obterConsultas());
       }
     }); */

  }

}
