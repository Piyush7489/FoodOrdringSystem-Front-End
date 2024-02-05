import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Toasts from 'src/app/Utils/Toast';
import { SignupRequest } from 'src/app/payload/service-request/signup-request';
import { AuthService } from 'src/app/servicce/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signupRequest:SignupRequest = new SignupRequest;
  signUpForm !: FormGroup
  constructor(private service:AuthService,private fb:FormBuilder,private router:Router){}
  ngOnInit(): void {
    this.checkSignupFormValidation();
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
    this.service.SignupForm(this.signupRequest).subscribe(
      (data:any)=>
    {
      Toasts.fire({
        icon: 'success',
        text: data.message,
        timer: 1500
      })
    this.router.navigate(['/login']);
    },(error:any)=>
    {
      {
        Toasts.fire({
          icon: 'success',
          text: error.error.msg,
          timer: 1500
        })
       this.router.navigate(['/signup']); 
    } 
  })
  }
}
