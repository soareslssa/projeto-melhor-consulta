import { Sexo } from './../../../../models/sexo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-medicos',
  templateUrl: './cadastrar-medicos.component.html',
  styleUrls: ['./cadastrar-medicos.component.scss']
})
export class CadastrarMedicosComponent implements OnInit {

  sexoOptions: Sexo[];

  nome!: string;
  sobrenome!: string;
  sexo!: Sexo;

  constructor() {

    this.limparCampos();

    this.sexoOptions = [
     {descricao: 'Masculino', sigla: 'M'},
     {descricao: 'Feminino', sigla: 'F'},
     {descricao: 'Outros', sigla: 'O'}
    ]
  }

  private limparCampos() {
    this.nome = '';
    this.sobrenome = '';
  }

  ngOnInit(): void {
  }

}
