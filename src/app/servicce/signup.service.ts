import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ApiRoutes } from '../Utils/api-routes';
import { EmailRequest } from '../payload/service-request/email-request';
import { AuthService } from './auth.service';
import { LoginComponent } from '../Comman-components/login/login.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService implements OnInit{
  
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
  }
 



  public generateOTP(emaildata:any)
  {
    return this.http.post(ApiRoutes.GENERATE_OTP, emaildata);
  }

  public addUser(user:any)
  {
    return this.http.post(ApiRoutes.ADD_USER,user)
  }

  public sendEmail(emailData:EmailRequest)
  {
    return this.http.post(ApiRoutes.SEND_EMAIL,emailData)
  }

  public checkOtp(ro:any)
  {
    return this.http.post(ApiRoutes.CHECK_OTP,ro)
  }

  

}
