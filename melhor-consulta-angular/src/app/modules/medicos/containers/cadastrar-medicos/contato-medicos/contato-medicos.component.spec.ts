import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoMedicosComponent } from './contato-medicos.component';

describe('ContatoMedicosComponent', () => {
  let component: ContatoMedicosComponent;
  let fixture: ComponentFixture<ContatoMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoMedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
