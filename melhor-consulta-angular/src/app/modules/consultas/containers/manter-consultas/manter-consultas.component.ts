import { ConsultasService } from '../../services/consultas.service';
import { Consulta } from '../../../../models/consulta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manter-consultas',
  templateUrl: './manter-consultas.component.html',
  styleUrls: ['./manter-consultas.component.scss']
})
export class ManterConsultasComponent implements OnInit {

  consultas: Consulta[];

  constructor(private consultasService: ConsultasService) { }

  ngOnInit(): void {
    this.obterConsultas();
  }

  obterConsultas(){
    this.consultasService.list().subscribe(
      data =>{ this.consultas = data; console.log(data)}
    );
  }

}
