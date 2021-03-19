import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaDetalleComponent } from './caja-detalle.component';

describe('CajaDetalleComponent', () => {
  let component: CajaDetalleComponent;
  let fixture: ComponentFixture<CajaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
