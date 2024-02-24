import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFoodComponent } from './view-food.component';

describe('ViewFoodComponent', () => {
  let component: ViewFoodComponent;
  let fixture: ComponentFixture<ViewFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFoodComponent]
    });
    fixture = TestBed.createComponent(ViewFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
