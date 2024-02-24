import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Toasts from 'src/app/Utils/Toast';
import { EmailRequest } from 'src/app/payload/service-request/email-request';
import { AuthService } from 'src/app/servicce/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit{

  constructor(private router:Router,private service:AuthService,private fb:FormBuilder)
  {
    this.forgetForm = this.fb.group({
      email:['',[Validators.required]]
    })
  }
  forgetForm!:FormGroup;
  ngOnInit(): void {

  }
   
   e:EmailRequest=new EmailRequest();

   submitEmailForForgetPass()
   {
    this.forgetForm.markAllAsTouched();
    if(!this.forgetForm.valid)
    {
      return;
    }
      this.service.forgetPassCheckEmail(this.e).subscribe((data:any)=>{
        Swal.fire("Success", data.message + this.e.sendTo, 'success')
        localStorage.setItem('fake-email',this.e.sendTo);
        this.router.navigate(['verify-otp-for-forget-password'])
      },
      (error: any) => {
        Toasts.fire({
          icon:'warning',
          text:error.error.error,
          timer:3000
        })
      }
      
      )
   }

}
