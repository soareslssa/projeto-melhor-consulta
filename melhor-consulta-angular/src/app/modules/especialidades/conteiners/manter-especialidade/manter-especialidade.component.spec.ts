import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterEspecialidadeComponent } from './manter-especialidade.component';

describe('ManterEspecialidadeComponent', () => {
  let component: ManterEspecialidadeComponent;
  let fixture: ComponentFixture<ManterEspecialidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManterEspecialidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterEspecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
