import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso-usuario',
  templateUrl: './acesso-usuario.component.html',
  styleUrls: ['./acesso-usuario.component.scss']
})
export class AcessoUsuarioComponent implements OnInit {


  optSexo = [
    { descricao: 'Masculino', sigla: 'M' },
    { descricao: 'Feminino', sigla: 'F' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
