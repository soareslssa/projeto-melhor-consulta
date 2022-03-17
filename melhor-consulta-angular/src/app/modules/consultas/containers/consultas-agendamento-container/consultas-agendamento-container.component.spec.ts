import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasAgendamentoContainerComponent } from './consultas-agendamento-container.component';

describe('ConsultasAgendamentoContainerComponent', () => {
  let component: ConsultasAgendamentoContainerComponent;
  let fixture: ComponentFixture<ConsultasAgendamentoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasAgendamentoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasAgendamentoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
