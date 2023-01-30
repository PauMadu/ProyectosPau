import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombateHeroesComponent } from './combate-heroes.component';

describe('CombateHeroesComponent', () => {
  let component: CombateHeroesComponent;
  let fixture: ComponentFixture<CombateHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombateHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombateHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
