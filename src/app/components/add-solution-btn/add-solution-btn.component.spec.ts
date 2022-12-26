import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSolutionBtnComponent } from './add-solution-btn.component';

describe('AddSolutionBtnComponent', () => {
  let component: AddSolutionBtnComponent;
  let fixture: ComponentFixture<AddSolutionBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSolutionBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSolutionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
