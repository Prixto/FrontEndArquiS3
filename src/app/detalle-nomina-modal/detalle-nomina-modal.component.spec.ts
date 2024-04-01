import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleNominaModalComponent } from './detalle-nomina-modal.component';

describe('DetalleNominaModalComponent', () => {
  let component: DetalleNominaModalComponent;
  let fixture: ComponentFixture<DetalleNominaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleNominaModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleNominaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
