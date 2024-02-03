import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindeshboardMainContentComponent } from './admindeshboard-main-content.component';

describe('AdmindeshboardMainContentComponent', () => {
  let component: AdmindeshboardMainContentComponent;
  let fixture: ComponentFixture<AdmindeshboardMainContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmindeshboardMainContentComponent]
    });
    fixture = TestBed.createComponent(AdmindeshboardMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
