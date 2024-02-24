import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Toasts from 'src/app/Utils/Toast';
import { CheckOtpRequest } from 'src/app/payload/service-request/check-otp-request';
import { SignupService } from 'src/app/servicce/signup.service';

@Component({
  selector: 'app-verification-otp-for-forget-password',
  templateUrl: './verification-otp-for-forget-password.component.html',
  styleUrls: ['./verification-otp-for-forget-password.component.css']
})
export class VerificationOtpForForgetPasswordComponent {
  constructor(private service:SignupService,private router:Router){}
  
getFormattedTime() {
console.log('jjjkk');

}
  cor: CheckOtpRequest = new CheckOtpRequest();
  reSendOtp = false;
resendOtp() {
alert("resend-otp")
}
submit() {
  this.cor.email =localStorage.getItem('fake-email')!
  this.service.checkOtp(this.cor).subscribe((data:any)=>{
    console.log(data);
    if(data.message)
    {
         ///changepassword page open krna h
         this.router.navigate(['new-pass'])
    }
  else{
    Toasts.fire({
      icon: 'error',
      text: 'OTP does not match',
      timer: 2000
    })
  }
  },(error)=>{
    
    
  })     
}

}
