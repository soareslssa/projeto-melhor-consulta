import { Sexo } from './../../../../models/sexo';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-cadastrar-medicos',
  templateUrl: './cadastrar-medicos.component.html',
  styleUrls: ['./cadastrar-medicos.component.scss']
})
export class CadastrarMedicosComponent implements OnInit {

  items: MenuItem[];

  constructor() {
    this.items = [
      {label: 'Dados Pessoais', routerLink:'dados-pessoais-medicos'},
      {label: 'Dados Profissionais'},
      {label: 'Contato'},
      {label: 'Confirmação'}
    ]
  }

  ngOnInit(): void {
  }

}