import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'melhor-consulta-angular';

  menuItens: MenuItem[];

  ngOnInit(): void {

    this.menuItens = [
      {
        label: 'Consultas', icon: 'pi pi-fw pi-calendar', items: [
          { label: 'Agendamento', routerLink: '/consultas' }
        ]
      },
      {
        label: 'Grades', icon: 'pi pi-fw pi-table', items: [
          { label: 'Manter Grades', routerLink: '/grades' }
        ]
      },
      {
        label: 'Especialidades', icon: 'pi pi-fw pi-star', items: [
          { label: 'Manter Especialidades', routerLink: '/especialidades' }
        ]
      },
    ]
  }

}
