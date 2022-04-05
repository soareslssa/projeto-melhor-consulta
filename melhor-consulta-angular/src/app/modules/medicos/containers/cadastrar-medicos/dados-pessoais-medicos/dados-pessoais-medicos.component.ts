import { MedicosService } from './../../../services/medicos.service';
import { Medico } from './../../../../../models/medico';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Sexo } from 'src/app/models/sexo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dados-pessoais-medicos',
  templateUrl: './dados-pessoais-medicos.component.html',
  styleUrls: ['./dados-pessoais-medicos.component.scss']
})
export class DadosPessoaisMedicosComponent implements OnInit {

  form: FormGroup;
  sexoOptions: Sexo[];
  submitted: boolean = false;

  constructor(private router: Router, public medicosService: MedicosService, public fb: FormBuilder) {

    this.form = this.fb.group({
      nome: fb.control('', Validators.required),
      sobrenome: fb.control('', Validators.required),
      nomeSocial: fb.control('', Validators.required),
      dtNascimento: fb.control('', Validators.required),
      sexo: fb.control('', Validators.required),
      email: fb.control('', Validators.required),
      cpf: fb.control('', Validators.required),
      crm: fb.control('', Validators.required),
      cnpj: fb.control(''),
    });

    this.sexoOptions = [
      {descricao: 'Masculino', sigla: 'M'},
      {descricao: 'Feminino', sigla: 'F'},
      {descricao: 'Outros', sigla: 'O'}
     ]
  }

  onSubmit(){
    const medico: Medico = this.form.value;
    console.log(medico);
  }

  ngOnInit(): void {}

  nextPage() {
     this.router.navigate(['medicos/cadastrar/dados-profissionais-medicos']);
      this.submitted = true;
  }

}
