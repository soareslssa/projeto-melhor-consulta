import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterGradesComponent } from './manter-grades.component';

describe('ManterGradesComponent', () => {
  let component: ManterGradesComponent;
  let fixture: ComponentFixture<ManterGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManterGradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
