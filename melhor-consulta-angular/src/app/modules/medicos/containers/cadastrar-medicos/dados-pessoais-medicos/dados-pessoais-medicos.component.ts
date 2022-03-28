import { Component, OnInit } from '@angular/core';
import { Sexo } from 'src/app/models/sexo';

@Component({
  selector: 'app-dados-pessoais-medicos',
  templateUrl: './dados-pessoais-medicos.component.html',
  styleUrls: ['./dados-pessoais-medicos.component.scss']
})
export class DadosPessoaisMedicosComponent implements OnInit {

  sexoOptions: Sexo[];
  sexo!: Sexo;

  constructor() {
    this.sexoOptions = [
      {descricao: 'Masculino', sigla: 'M'},
      {descricao: 'Feminino', sigla: 'F'},
      {descricao: 'Outros', sigla: 'O'}
     ]
  }

  ngOnInit(): void {}

}
