import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationOtpForForgetPasswordComponent } from './verification-otp-for-forget-password.component';

describe('VerificationOtpForForgetPasswordComponent', () => {
  let component: VerificationOtpForForgetPasswordComponent;
  let fixture: ComponentFixture<VerificationOtpForForgetPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerificationOtpForForgetPasswordComponent]
    });
    fixture = TestBed.createComponent(VerificationOtpForForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
