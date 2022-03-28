import { TestBed } from '@angular/core/testing';

import { GradeConsultaService } from './grade-consulta.service';

describe('GradeConsultaService', () => {
  let service: GradeConsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradeConsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
