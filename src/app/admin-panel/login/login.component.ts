import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  private static Role:any;
  constructor(private fb:FormBuilder,private service:AuthService,private router:Router){}
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
      LoginComponent.Role=data.role.toLowerCase();
      this.service.loginUser(data.token);
      this.service.getCurrentUser().subscribe((data)=>{})
      this.router.navigate([LoginComponent.Role]);
    })
 } 
}
