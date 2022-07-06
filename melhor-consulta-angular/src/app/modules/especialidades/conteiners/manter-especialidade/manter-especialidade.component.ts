import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Especialidade } from 'src/app/models/especialidade';
import { EspecialidadesService } from '../../services/especialidades.service';
import { EspecialidadeRequest } from './../../../../models/especialidade';

@Component({
  selector: 'app-manter-especialidade',
  templateUrl: './manter-especialidade.component.html',
  styleUrls: ['./manter-especialidade.component.scss']
})
export class ManterEspecialidadeComponent implements OnInit {

  _form: FormGroup;
  especialidades: Especialidade[];
  edicao: boolean = false;

  constructor(private fb: FormBuilder, private especialidadeService: EspecialidadesService,
    private router: Router, private confirmationService: ConfirmationService, private toast: MessageService) {

    this.limparCampos(fb);
  }

  private limparCampos(fb: FormBuilder) {
    this._form = fb.group({
      id: fb.control(null),
      sigla: fb.control('').setValidators(Validators.required),
      descricao: fb.control('').setValidators(Validators.required),
      situacao: fb.control(true),
      medico: fb.control('')
    });
  }

  onSave() {
    let especialidade: EspecialidadeRequest = { ... this._form.value };
    if(this.edicao){
      this.especialidadeService.update(especialidade)
      .subscribe(data => {
        this.reiniciar();
        this.showMessage("Especialidade atualizada com sucesso!");
      })
    } else {
    this.especialidadeService.add(especialidade)
      .subscribe(data => {
        this.reiniciar();
        this.showMessage("Especialidade cadastrada com sucesso!");
      });
    }
  }

  onDelete(id: number) {

    this.confirmationService.confirm({
      message: "Tem certeza que deseja excluir esta Especialidade?",
      accept: () => {
        this.especialidadeService.delete(id).subscribe(
          data => this.listarEspecialidades()
        );
      }
    });
  }

  onEdit(selected: Especialidade){
    this.edicao = true;

    this._form.controls['id'].setValue(selected.id);
    this._form.controls['sigla'].setValue(selected.sigla);
    this._form.controls['descricao'].setValue(selected.descricao);
    this._form.controls['situacao'].setValue(selected.situacao);
    this._form.controls['medico'].setValue(selected.medico);
  }

  reiniciar(){
    this.edicao = false;
    this.limparCampos(this.fb);
    this.listarEspecialidades();
  }


  ngOnInit(): void {
    this.listarEspecialidades();
  }

  listarEspecialidades() {
    this.especialidadeService.list().subscribe(data => {
      this.especialidades = data
    });
  }

  showMessage(msg: string){
    this.toast.add({severity: 'success', detail: msg})
  }




}
