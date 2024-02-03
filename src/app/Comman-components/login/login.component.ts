import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/Model/auth-request';
import Toasts from 'src/app/Utils/Toast';
import { CurrentUserResponse } from 'src/app/payload/Response/current-user-response';
import { AuthService } from 'src/app/servicce/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  authRequest: AuthRequest = new AuthRequest;
  private static ROLE : any;
  user:CurrentUserResponse = new CurrentUserResponse;
  constructor(private fb:FormBuilder,private service:AuthService,private router:Router,private snack:MatSnackBar){}
  ngOnInit(): void {
    this.getUser()
    this.checkLoginFormValidation();
  }

  getUser()
  {
    this.service.getCurrentUser().subscribe({
      next:(data:any)=>{
        LoginComponent.ROLE = data.message.userRole.toLowerCase()
        if(this.service.getToken() != null){
        this.router.navigate([LoginComponent.ROLE])
    }        
      }
    })
  }
  

  checkLoginFormValidation()
  {
       this.loginForm=this.fb.group({
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required]],
       });
  }
 formSubmit()
 {
  localStorage.clear();
  this.loginForm.markAllAsTouched();
  if(!this.loginForm.valid){
    return;
  }
    localStorage.clear();
    this.trimValues(this.loginForm.value)
    if (this.loginForm.valid) {
      console.log(this.loginForm.value.email.trim()+"!!!");
      this.service.generateToken(this.loginForm.value).subscribe(
        (data: any) => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('ROLE',data.role)
          Toasts.fire({
            icon: 'success',
            text: 'Login successfull...',
            timer: 1500
          })
          this.service.loginUser(data.token);
          this.service.getCurrentUser().subscribe(
            (user:any) => {
              this.user = user.message
              this.user.userRole
            
            });
          LoginComponent.ROLE = data.role.toLowerCase()
          setTimeout(() => {
            this.router.navigate([LoginComponent.ROLE])
          }, 1000);
        },
        (error: any) => {
          this.snack.open("invailid Email or Password...!!", "☹️", {
            duration: 3000
          });
         

        }
      )
    }
    else {
      alert("ELSE")
      
    }
  }

  trimValues(data:any)
  {
    this.loginForm.value.email = data.email.trim()
    this.loginForm.value.password = data.password.trim()
  }

}
