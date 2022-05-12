import { ConsultasService } from '../../services/consultas.service';
import { Consulta } from '../../../../models/consulta';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-manter-consultas',
  templateUrl: './manter-consultas.component.html',
  styleUrls: ['./manter-consultas.component.scss']
})
export class ManterConsultasComponent implements OnInit {

  consultas: Consulta[];

  constructor(private consultasService: ConsultasService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.obterConsultas();
  }

  obterConsultas(){
    this.consultasService.list().subscribe(
      data =>{ this.consultas = data; console.log(data)}
    );
  }

  onDelete(id: number){
    this.confirmationService.confirm({
      message: "Tem certeza que deseja excluir este Horário?",
      accept: () => {
        this.consultasService.delete(id).subscribe(data => this.obterConsultas());
      }
    });

  }

}
