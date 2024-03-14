import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Toasts from 'src/app/Utils/Toast';
import { ChangePasswordRequest } from 'src/app/payload/service-request/change-pass';
import { AuthService } from 'src/app/servicce/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-changg-pass',
  templateUrl: './changg-pass.component.html',
  styleUrls: ['./changg-pass.component.css']
})
export class ChanggPassComponent implements OnInit {
  changePassword:ChangePasswordRequest = new ChangePasswordRequest;
  changePassForm!:FormGroup;
  constructor(private authService:AuthService,private fb:FormBuilder,private router:Router)
  {
       
  }
  currPass = true
  newPass = true
  verifyPass = true
  passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  checkReg = ''
  private static ROLE : any;
  ngOnInit(): void {
   
    
  }

  getUser()
  {
    this.authService.getCurrentUser().subscribe({
      next:(data:any)=>{
        ChanggPassComponent.ROLE = data.message.userRole.toLowerCase()
        if(this.authService.getToken() != null){
        this.router.navigate([ChanggPassComponent.ROLE])
    }        
      }
    })
  }
  checkFields()
  {
    if(this.changePassword.currentPassword.trim() === '')
    this.currPass = false;
    else
    this.currPass = true;
    if(this.changePassword.newPassword.trim() === '')
    this.newPass = false;
    else
    this.newPass = true;
    if(this.changePassword.verifyPassword.trim() === '')
    this.verifyPass = false;
    else
    this.verifyPass = true;
  }

  checkRegex()
  {
    if(this.passwordRegex.test(this.changePassword.newPassword))
    {
      this.checkReg = ''
      return true
    }else{
      this.checkReg = 'Password does not meet requirements !!'
      return false
    }
  }
  changePass()
  {
   
    this.checkFields()

    if(this.currPass&&this.newPass&&this.verifyPass)
    { 
      if(this.checkRegex())
      {
        
        this.authService.changePassword(this.changePassword).subscribe({
          next:(data:any)=>{
            Toasts.fire({
              icon: 'success',
              title: data.true
            }).then(e=>{
              
              this.getUser();
            })
          },
          error:error=>{
            console.log("ERROR",error.error.false);
            Toasts.fire({
              icon: 'error',
              title: error.error.false
            })
          }
        })
      }else{
       Swal.fire({
        title:'please Enter Valid New Password',
        icon:'info',
        timer:3000
       })
      }
    }
    console.log(this.changePassword);
  }

 
}
