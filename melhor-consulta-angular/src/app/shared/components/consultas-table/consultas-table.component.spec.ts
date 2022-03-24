import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasTableComponent } from './consultas-table.component';

describe('ConsultasTableComponent', () => {
  let component: ConsultasTableComponent;
  let fixture: ComponentFixture<ConsultasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
