import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Sexo } from 'src/app/models/sexo';

import { Especialidade } from './../../../../models/especialidade';
import { MedicoRequest } from './../../../../models/medico';
import { UtilsService } from './../../../../shared/services/utils.service';
import { EspecialidadesService } from './../../../consultas/services/especialidades.service';
import { MedicosService } from './../../services/medicos.service';

@Component({
  selector: 'app-cadastro-medicos',
  templateUrl: './cadastro-medicos.component.html',
  styleUrls: ['./cadastro-medicos.component.scss'],
})
export class CadastroMedicosComponent implements OnInit {
  optSexo: Sexo[];
  especialidades: Especialidade[];
  form: FormGroup;

  constructor(
    private especialidadeService: EspecialidadesService,
    private medicosService: MedicosService,
    private utilsservice: UtilsService,
    private fb: FormBuilder,
    private router: Router
  ) {
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
      nroLogradouro: fb.control(''),
      complemento: fb.control(''),
      bairro: fb.control(''),
      localidade: fb.control(''),
      uf: fb.control(''),
    });

    this.optSexo = [
      { descricao: 'Masculino', sigla: 'M' },
      { descricao: 'Feminino', sigla: 'F' },
    ];

    this.especialidadeService
      .list()
      .subscribe((dados) => (this.especialidades = dados));
  }

  ngOnInit(): void {}

  pesquisarEnderecoViaCep() {
    this.utilsservice
      .pesquisarEnderecoViaCep(this.form.controls['cep'].value)
      .subscribe((data) => {
        this.form.patchValue(data);
      });
  }

  cadastrarMedico() {
    const novoMedico: MedicoRequest = {... this.form.value};
    this.medicosService.adicionarMedico(novoMedico)
        .subscribe(_result =>{
          this.router.navigate(['/consultas']);
        }
        );
  }

  validarSenha(confirmaSenha: string) {
    const senha: string = this.form.controls['senha'].value;
    if (senha != null) {
      if (!senha.localeCompare(confirmaSenha)) {
        console.log('A senhas não são iguais!');
      }
    }
  }
}
