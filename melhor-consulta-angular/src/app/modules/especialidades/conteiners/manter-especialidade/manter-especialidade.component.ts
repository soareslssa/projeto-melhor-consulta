import { EspecialidadeRequest } from './../../../../models/especialidade';
import { Especialidade } from 'src/app/models/especialidade';
import { EspecialidadesService } from './../../../consultas/services/especialidades.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manter-especialidade',
  templateUrl: './manter-especialidade.component.html',
  styleUrls: ['./manter-especialidade.component.scss']
})
export class ManterEspecialidadeComponent implements OnInit {

  _form: FormGroup;
  especialidades: Especialidade[];

  constructor(private fb: FormBuilder, private especialidadeService: EspecialidadesService,
    private router: Router) {

    this._form = fb.group({
      sigla: fb.control(''),
      descricao: fb.control(''),
      situacao: fb.control(true),
      medico: fb.control('')
    });
  }

  onAdd(){
    let especialidade: EspecialidadeRequest = {... this._form.value};
    this.especialidadeService.add(especialidade)
        .subscribe(data => this.listarEspecialidades());
  }


  ngOnInit(): void {
   this.listarEspecialidades();
  }

  listarEspecialidades(){
    this.especialidadeService.list().subscribe(data => {
      this.especialidades = data; console.log(data) });
  }



}