import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/Model/auth-request';
import Toasts from 'src/app/Utils/Toast';
import { EmailRequest } from 'src/app/payload/service-request/email-request';
import { AuthService } from 'src/app/servicce/auth.service';

@Component({
  selector: 'app-new-pass-for-forget-pass',
  templateUrl: './new-pass-for-forget-pass.component.html',
  styleUrls: ['./new-pass-for-forget-pass.component.css']
})
export class NewPassForForgetPassComponent implements OnInit {
  constructor(private service:AuthService,private fb:FormBuilder,private router:Router)
  {
     this.newForm=this.fb.group({
      password:['',[Validators.required]],
     })
  }
  newForm!:FormGroup;
  newPassData:AuthRequest=new AuthRequest();
  ngOnInit(): void {
  this.newPassData.email=localStorage.getItem('fake-email')!;
  console.log(this.newPassData.email);
  
}


submit()
{
  this.newForm.markAllAsTouched();
  if(!this.newForm.valid)
  {
    return;
  }
  this.service.newPassForForgetPass(this.newPassData.email,this.newPassData.password).subscribe((data:any)=>
  {
    Toasts.fire({
      icon:'success',
      text:data.message,
      timer:3000
    })
    this.router.navigate(['login'])

  },(error:any)=>
  {
    Toasts.fire({
      icon:'success',
      text:error.message,
      timer:3000
    })
    return;
   // this.router.navigate(['new-pass'])

  })
}


}
