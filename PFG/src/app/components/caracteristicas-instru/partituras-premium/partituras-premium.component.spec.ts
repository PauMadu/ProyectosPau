import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiturasPremiumComponent } from './partituras-premium.component';

describe('PartiturasPremiumComponent', () => {
  let component: PartiturasPremiumComponent;
  let fixture: ComponentFixture<PartiturasPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartiturasPremiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartiturasPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
