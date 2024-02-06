import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Toasts from 'src/app/Utils/Toast';
import { EmailRequest } from 'src/app/payload/service-request/email-request';
import { SignupRequest } from 'src/app/payload/service-request/signup-request';
import { AuthService } from 'src/app/servicce/auth.service';
import { SignupService } from 'src/app/servicce/signup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signupRequest:SignupRequest = new SignupRequest;
  signUpForm !: FormGroup
  emailData: EmailRequest = new EmailRequest;
  constructor(private service:AuthService,private fb:FormBuilder,private router:Router,private signup:SignupService){}
  ngOnInit(): void {
    this.getUser()
    this.checkSignupFormValidation();
  }
 
  getUser()
  {
    this.service.getCurrentUser().subscribe({
      next:(data:any)=>{
        // LoginComponent.ROLE = data.message.userRole.toLowerCase()
        if(this.service.getToken() != null){
        this.router.navigate([data.message.userRole.toLowerCase()])
    }        
      }
    })
  }

  checkSignupFormValidation()
  {
  this.signUpForm=this.fb.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    password:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    mob:['',[Validators.required,Validators.minLength(10)]],
    tempAddress:['',[Validators.required]],
    tempRole:['',[Validators.required]]
  })
  }

  SubmitSignupForm()
  {  
    
    this.signUpForm.markAllAsTouched();
    if(!this.signUpForm.valid)
    {
      return;
    }
   
    this.emailData.sendTo = this.signupRequest.email.trim()
    this.signup.sendEmail(this.emailData).subscribe(
      (data: any) => {
        localStorage.setItem('fakeUser', JSON.stringify(this.signupRequest))
        Swal.fire("Success", "OTP Successfully sent on " + this.signupRequest.email, 'success')
        this.router.navigate(['verify-otp'])
      },
      (error: any) => {
        Toasts.fire({
          icon:'info',
          text:error.error.error,
          timer:1000
        })
      }
    )
  }
}
