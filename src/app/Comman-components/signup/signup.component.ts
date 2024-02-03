import { Component } from '@angular/core';
import { SignupRequest } from 'src/app/payload/service-request/signup-request';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupRequest:SignupRequest = new SignupRequest;
  signup()
  {
    alert("SIGNUP")
  }

}
