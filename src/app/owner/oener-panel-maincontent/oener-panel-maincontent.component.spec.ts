import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OenerPanelMaincontentComponent } from './oener-panel-maincontent.component';

describe('OenerPanelMaincontentComponent', () => {
  let component: OenerPanelMaincontentComponent;
  let fixture: ComponentFixture<OenerPanelMaincontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OenerPanelMaincontentComponent]
    });
    fixture = TestBed.createComponent(OenerPanelMaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
