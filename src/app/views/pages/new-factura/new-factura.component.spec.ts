import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFacturaComponent } from './new-factura.component';

describe('NewFacturaComponent', () => {
  let component: NewFacturaComponent;
  let fixture: ComponentFixture<NewFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
