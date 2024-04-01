import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncontableComponent } from './gestioncontable.component';

describe('GestioncontableComponent', () => {
  let component: GestioncontableComponent;
  let fixture: ComponentFixture<GestioncontableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestioncontableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestioncontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
