import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosProfissionaisMedicosComponent } from './dados-profissionais-medicos.component';

describe('DadosProfissionaisMedicosComponent', () => {
  let component: DadosProfissionaisMedicosComponent;
  let fixture: ComponentFixture<DadosProfissionaisMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosProfissionaisMedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosProfissionaisMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
