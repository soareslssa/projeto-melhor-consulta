import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMedicosComponent } from './cadastrar-medicos.component';

describe('CadastrarMedicosComponent', () => {
  let component: CadastrarMedicosComponent;
  let fixture: ComponentFixture<CadastrarMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarMedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
