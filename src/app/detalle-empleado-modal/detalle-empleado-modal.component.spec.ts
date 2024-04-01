import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEmpleadoModalComponent } from './detalle-empleado-modal.component';

describe('DetalleEmpleadoModalComponent', () => {
  let component: DetalleEmpleadoModalComponent;
  let fixture: ComponentFixture<DetalleEmpleadoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleEmpleadoModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleEmpleadoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
