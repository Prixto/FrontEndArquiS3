import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosLandComponent } from './precios-land.component';

describe('PreciosLandComponent', () => {
  let component: PreciosLandComponent;
  let fixture: ComponentFixture<PreciosLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreciosLandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreciosLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
