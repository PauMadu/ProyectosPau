import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoQuizComponent } from './resultado-quiz.component';

describe('ResultadoQuizComponent', () => {
  let component: ResultadoQuizComponent;
  let fixture: ComponentFixture<ResultadoQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
