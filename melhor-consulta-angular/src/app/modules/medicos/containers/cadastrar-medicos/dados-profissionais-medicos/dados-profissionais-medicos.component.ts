import { EnderecoViaCep } from './../../../../../models/enderecoViaCep';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from './../../../../../shared/services/utils.service';

@Component({
  selector: 'app-dados-profissionais-medicos',
  templateUrl: './dados-profissionais-medicos.component.html',
  styleUrls: ['./dados-profissionais-medicos.component.scss']
})
export class DadosProfissionaisMedicosComponent implements OnInit {

  formEndereco: FormGroup;

  constructor(private utilsService: UtilsService,  public fb: FormBuilder) {
    this.formEndereco = this.fb.group({
      logradouro: fb.control('', Validators.required),
      bairro: fb.control('', Validators.required),
      cep: fb.control('', Validators.required),
      uf: fb.control('', Validators.required),
      localidade: fb.control('', Validators.required)
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

}
