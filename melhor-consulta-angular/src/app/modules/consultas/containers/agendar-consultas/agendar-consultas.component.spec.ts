import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarConsultasComponent } from './agendar-consultas.component';

describe('AgendarConsultasComponent', () => {
  let component: AgendarConsultasComponent;
  let fixture: ComponentFixture<AgendarConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendarConsultasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
