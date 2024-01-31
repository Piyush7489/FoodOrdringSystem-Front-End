import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthRequest } from 'src/app/Model/auth-request';
import { AuthService } from 'src/app/servicce/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  authRequest: AuthRequest = new AuthRequest;
 
  constructor(private fb:FormBuilder,private service:AuthService){}
  ngOnInit(): void {
    this.checkLoginFormValidation();
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
  this.loginForm.markAllAsTouched();
  if(!this.loginForm.valid){
    return;
  }
    this.service.generateToken(this.authRequest).subscribe((data:any)=>
    {
      
      this.service.loginUser(data.token);
      window.location.href='/dashboard'
    })

 } 
}
