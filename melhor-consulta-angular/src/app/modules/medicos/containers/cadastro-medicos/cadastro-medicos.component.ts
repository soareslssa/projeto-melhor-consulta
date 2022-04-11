import { FormGroup, FormBuilder } from '@angular/forms';
import { UtilsService } from './../../../../shared/services/utils.service';
import { Especialidade } from './../../../../models/especialidade';
import { EspecialidadesService } from './../../../consultas/services/especialidades.service';
import { Component, OnInit } from '@angular/core';
import { Sexo } from 'src/app/models/sexo';

@Component({
  selector: 'app-cadastro-medicos',
  templateUrl: './cadastro-medicos.component.html',
  styleUrls: ['./cadastro-medicos.component.scss'],
})
export class CadastroMedicosComponent implements OnInit {
  optSexo: Sexo[];
  especialidades: Especialidade[];
  form: FormGroup;

  constructor(private especialidadeService: EspecialidadesService,
    private utilsservice: UtilsService, private fb: FormBuilder) {

    this.form = fb.group({
      nome: fb.control(''),
      sobrenome: fb.control(''),
      email: fb.control(''),
      senha: fb.control(''),
      nomeSocial: fb.control(''),
      sexo: fb.control(''),
      dtNascimento: fb.control(''),
      cpf: fb.control(''),
      telefone: fb.control(''),
      crm: fb.control(''),
      especialidade: fb.control(''),
      cep: fb.control(''),
      logradouro: fb.control(''),
      numero: fb.control(''),
      complemento: fb.control(''),
      bairro: fb.control(''),
      localidade: fb.control(''),
      uf: fb.control('')
    })

    this.optSexo = [
      { descricao: 'Masculino', sigla: 'M' },
      { descricao: 'Feminino', sigla: 'F' },
    ];

    this.especialidadeService.list()
    .subscribe(dados => this.especialidades = dados);
  }

  ngOnInit(): void {}

  pesquisarEnderecoViaCep(){
    this.utilsservice.pesquisarEnderecoViaCep(this.form.controls['cep'].value)
    .subscribe(data => {
      this.form.patchValue(data)
    });
  }
}
