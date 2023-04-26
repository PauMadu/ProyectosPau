import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentosComponent } from './instrumentos.component';

describe('InstrumentosComponent', () => {
  let component: InstrumentosComponent;
  let fixture: ComponentFixture<InstrumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
