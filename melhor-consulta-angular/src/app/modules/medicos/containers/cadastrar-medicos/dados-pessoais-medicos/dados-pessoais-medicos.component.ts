import { Medico } from './../../../../../models/medico';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Sexo } from 'src/app/models/sexo';

@Component({
  selector: 'app-dados-pessoais-medicos',
  templateUrl: './dados-pessoais-medicos.component.html',
  styleUrls: ['./dados-pessoais-medicos.component.scss']
})
export class DadosPessoaisMedicosComponent implements OnInit {

  sexoOptions: Sexo[];
  medico!: Medico;

  sexo!: Sexo;
  submitted: boolean = false;

  constructor(private router: Router) {
    this.sexoOptions = [
      {descricao: 'Masculino', sigla: 'M'},
      {descricao: 'Feminino', sigla: 'F'},
      {descricao: 'Outros', sigla: 'O'}
     ]
  }

  ngOnInit(): void {}

  nextPage() {
      this.router.navigate(['medicos/cadastrar/dados-profissionais-medicos']);
      this.submitted = true;
  }

}
