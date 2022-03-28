import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPessoaisMedicosComponent } from './dados-pessoais-medicos.component';

describe('DadosPessoaisMedicosComponent', () => {
  let component: DadosPessoaisMedicosComponent;
  let fixture: ComponentFixture<DadosPessoaisMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosPessoaisMedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosPessoaisMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
