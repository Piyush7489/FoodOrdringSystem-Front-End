import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Toasts from 'src/app/Utils/Toast';
import { ApiRoutes } from 'src/app/Utils/api-routes';
import { CurrentUserResponse } from 'src/app/payload/Response/current-user-response';
import { AuthService } from 'src/app/servicce/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  constructor(private login:AuthService,private router:Router){}
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

  logout()
  {

    Swal.fire({
      title: "Do you want to Logout your account?",
      showDenyButton: true,
      confirmButtonText: "Logout",
      confirmButtonColor:'red',
      denyButtonText: `Don't Logout`,
      denyButtonColor:'blue',
      icon:'info'
    }).then((result) => {
      if (result.isConfirmed) {
        this.login.currentUser.next(null);
        this.login.logout()
        Toasts.fire({
          icon: 'success',
          text: 'Logout successfull...',
          timer: 1000
        })
        this.router.navigate(['login'])
      } else if (result.isDenied) {
        Toasts.fire({
          icon: 'info',
          text: 'Logout Canceled...',
          timer: 1000
        })
      }
    });
  }

}
