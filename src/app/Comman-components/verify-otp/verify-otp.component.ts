import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/Utils/constants';
import { CheckOtpRequest } from 'src/app/payload/service-request/check-otp-request';
import { EmailRequest } from 'src/app/payload/service-request/email-request';
import { SignupRequest } from 'src/app/payload/service-request/signup-request';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit{


  signupRequest:SignupRequest = new SignupRequest
  timer: number= Constants.RESENT_OTP_TIME ;
  reSendOtp = false
  emailData:EmailRequest = new EmailRequest;
  cor:CheckOtpRequest = new CheckOtpRequest;
  ngOnInit(): void {

  }


  

}
