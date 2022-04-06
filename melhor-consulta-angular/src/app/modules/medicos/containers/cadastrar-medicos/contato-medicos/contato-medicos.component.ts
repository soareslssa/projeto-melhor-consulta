import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-contato-medicos',
  templateUrl: './contato-medicos.component.html',
  styleUrls: ['./contato-medicos.component.scss']
})
export class ContatoMedicosComponent implements OnInit {

  formEndereco: FormGroup;

  constructor(private utilsService: UtilsService,  private fb: FormBuilder, private router: Router) {
    this.formEndereco = this.fb.group({
      logradouro: fb.control('', Validators.required),
      bairro: fb.control('', Validators.required),
      cep: fb.control('', Validators.required),
      uf: fb.control('', Validators.required),
      localidade: fb.control('', Validators.required),
      celular: fb.control('', Validators.required),
      telefone: fb.control('')
    });
  }

  ngOnInit(): void {
  }

  pesquisarEnderecoViaCep(){
    this.utilsService.pesquisarEnderecoViaCep(this.formEndereco.controls['cep'].value)
    .subscribe(data => {
      this.formEndereco.patchValue(data);
    })
      console.log(this.formEndereco);
  }

  recuarStep(){
    this.router.navigate(['medicos/cadastrar/dados-profissionais-medicos'])
  }

  avancarStep(){

  }
}
