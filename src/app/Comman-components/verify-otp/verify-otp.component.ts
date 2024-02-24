import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Toasts from 'src/app/Utils/Toast';
import { Constants } from 'src/app/Utils/constants';
import { CheckOtpRequest } from 'src/app/payload/service-request/check-otp-request';
import { EmailRequest } from 'src/app/payload/service-request/email-request';
import { SignupRequest } from 'src/app/payload/service-request/signup-request';
import { SignupService } from 'src/app/servicce/signup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit {

  constructor(private signup: SignupService,private router:Router) { }
  signupRequest: SignupRequest = new SignupRequest
  timer: number = Constants.RESENT_OTP_TIME;
  reSendOtp = false
  emailData: EmailRequest = new EmailRequest;
  cor: CheckOtpRequest = new CheckOtpRequest;
  emailShow = {
    first: '',
    last: ''
  }
  inputOTP: any
  ngOnInit(): void {
    this.getUserDetails()
    this.startTimer();

  }

  getUserDetails() {
    let userStr = localStorage.getItem('fakeUser');
    if (userStr != null) {
      this.signupRequest = JSON.parse(userStr);
      this.emailData.sendTo = this.signupRequest.email
      this.emailShow.first = this.signupRequest.email.substring(0, 5)
      let index = this.signupRequest.email.lastIndexOf(".")
      this.emailShow.last = this.signupRequest.email.substring(index, (index + 4))
    }
  }
  submit() {
    this.getUserDetails()
    this.cor.email = this.signupRequest.email
    this.signup.checkOtp(this.cor).subscribe({
      next: (response: any) => {
        if (response.message) {
          
          
           if (this.signupRequest.tempRole === Constants.BOY) {
            this.toastMessage()
           this.router.navigate(['/boy-document-registration'])
          }
          else  {
            this.signup.addUser(this.signupRequest).subscribe({
              next:(response:any)=>{
                localStorage.clear()
                Toasts.fire({
                  icon:'success',
                  text:response.message,
                  timer:3000
                })
                this.router.navigate(['login'])
              },error:(error:any)=>{
                Toasts.fire({
                  icon:'success',
                  text:error.error.error,
                  timer:3000
                })
              }
            })
          }
        } else {
          Toasts.fire({
            icon: 'error',
            text: 'OTP does not match',
            timer: 2000
          })
        }
      }, error: (error) => {
        Toasts.fire({
          icon: 'error',
          text: error.error.error,
          timer: 2000
        })
      }
    })

  }

  // setDataInCheckOtpRequest(data:any)
  // {
  //   this.cor.email = data.email
  //   this.cor.otp = this.inputOTP
  // }
  getFormattedTime() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${mm} Min : ${ss} Sec`
  }

  resendOtp() {
    this.timer = Constants.RESENT_OTP_TIME
    this.startTimer()
    this.emailData.sendTo = this.signupRequest.email;
    this.signup.sendEmail(this.emailData).subscribe((
      (data: any) => {
        Toasts.fire({
          icon: 'success',
          timer: 1000,
          text: 'OTP is resended in existing Email'
        })
      }
    ), (error: any) => {
      Swal.fire('ERROR !!', 'Your Email ' + this.signupRequest.email + ' is Incorrect Please user Correct and vailid Email', 'info')
    })
  }

  startTimer() {
    this.reSendOtp = false
    let t = window.setInterval(() => {
      if (this.timer <= 0) {
        this.reSendOtp = true
        clearInterval(t);
      } else {
        this.timer--;
      }
    }, 1000)

  }

  toastMessage()
  {
    Toasts.fire({
      icon: 'success',
      text: "Your Email Verification Success ",
      timer: 2000
    })
  }

}
