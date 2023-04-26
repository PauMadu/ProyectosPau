import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasInstruComponent } from './caracteristicas-instru.component';

describe('CaracteristicasInstruComponent', () => {
  let component: CaracteristicasInstruComponent;
  let fixture: ComponentFixture<CaracteristicasInstruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicasInstruComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicasInstruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
