import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterConsultasComponent } from './manter-consultas.component';

describe('ManterConsultasComponent', () => {
  let component: ManterConsultasComponent;
  let fixture: ComponentFixture<ManterConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManterConsultasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
