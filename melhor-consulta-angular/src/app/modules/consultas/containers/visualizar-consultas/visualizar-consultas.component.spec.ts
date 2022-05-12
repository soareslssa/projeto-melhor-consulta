import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarConsultasComponent } from './visualizar-consultas.component';

describe('AgendarConsultasComponent', () => {
  let component: VisualizarConsultasComponent;
  let fixture: ComponentFixture<VisualizarConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarConsultasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
