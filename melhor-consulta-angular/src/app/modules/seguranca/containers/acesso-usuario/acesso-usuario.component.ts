import { UsuarioAcesso } from 'src/app/models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Sexo } from 'src/app/models/sexo';

import { UsuarioCadastro } from './../../../../models/usuario';
import { AcessoService } from './../../services/acesso.service';

@Component({
  selector: 'app-acesso-usuario',
  templateUrl: './acesso-usuario.component.html',
  styleUrls: ['./acesso-usuario.component.scss']
})
export class AcessoUsuarioComponent implements OnInit {

  optSexo: Sexo[];
  formCadastro: FormGroup;

  constructor( private fb: FormBuilder, private acessoService: AcessoService,
    private router: Router) {

      this.formCadastro = fb.group({
        nome: fb.control(''),
        sobrenome: fb.control(''),
        cpf: fb.control(''),
        email: fb.control(''),
        senha: fb.control(''),
        sexo: fb.control(''),
        dtNascimento: fb.control('')
      });

      this.optSexo = [
        { descricao: 'Masculino', sigla: 'M' },
        { descricao: 'Feminino', sigla: 'F' },
      ];

     }

  ngOnInit(): void {
  }

  cadastrarUsuario(){
    const usuarioCadastro: UsuarioCadastro = {... this.formCadastro.value};

    this.acessoService.cadastrarUsuarioPaciente(usuarioCadastro)
        .subscribe(result =>{
          console.log(result);
        }
        );
  }

  onLogin(){
    var _acesso: UsuarioAcesso = {... this.formCadastro.value};
    this.acessoService.logar(_acesso)
    .subscribe(result => console.log(result));
  }

}
