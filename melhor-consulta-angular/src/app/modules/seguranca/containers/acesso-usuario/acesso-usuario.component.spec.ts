import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoUsuarioComponent } from './acesso-usuario.component';

describe('AcessoUsuarioComponent', () => {
  let component: AcessoUsuarioComponent;
  let fixture: ComponentFixture<AcessoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessoUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
