import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasPesquisaContainerComponent } from './consultas-pesquisa-container.component';

describe('ConsultasPesquisaContainerComponent', () => {
  let component: ConsultasPesquisaContainerComponent;
  let fixture: ComponentFixture<ConsultasPesquisaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasPesquisaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasPesquisaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
