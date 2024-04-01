import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProductoModalComponent } from './detalle-producto-modal.component';

describe('DetalleProductoModalComponent', () => {
  let component: DetalleProductoModalComponent;
  let fixture: ComponentFixture<DetalleProductoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleProductoModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleProductoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
