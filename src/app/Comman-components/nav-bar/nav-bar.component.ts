import { Component, OnInit } from '@angular/core';
import { ApiRoutes } from 'src/app/Utils/api-routes';
import { CurrentUserResponse } from 'src/app/payload/Response/current-user-response';
import { AuthService } from 'src/app/servicce/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  constructor(private login:AuthService){}
  currentUser:CurrentUserResponse = new CurrentUserResponse;
  imagePreview:any;
  ngOnInit(): void {

    this.getCurrentUser()
  }

  getCurrentUser()
  {
    this.login.loginUserData.subscribe({
      next:(data:any)=>{
        this.currentUser = data.message
        this.imagePreview = ApiRoutes.IMAGE_URL+this.currentUser.profilePhoto
      }
    })
  }

}
