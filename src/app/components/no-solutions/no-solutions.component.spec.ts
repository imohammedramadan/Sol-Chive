import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSolutionsComponent } from './no-solutions.component';

describe('NoSolutionsComponent', () => {
  let component: NoSolutionsComponent;
  let fixture: ComponentFixture<NoSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
