import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizarConsultasComponent } from './containers/visualizar-consultas/visualizar-consultas.component';
import { ManterConsultasComponent } from './containers/manter-consultas/manter-consultas.component';

const routes: Routes = [
  { path: '', component: VisualizarConsultasComponent},
  { path: 'manter', component: ManterConsultasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
