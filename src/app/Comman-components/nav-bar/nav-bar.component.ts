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
export class NavBarComponent implements OnInit {
  public isLoggedIn = false;
  constructor(public login: AuthService, private router: Router) { }
  currentUser: CurrentUserResponse = new CurrentUserResponse;
  imagePreview: any;
  userRole: any
  ngOnInit(): void {

    this.getCurrentUser();
    this.isLogin();

  }

  getCurrentUser() {
    this.login.loginUserData.subscribe({
      next: (data: any) => {
        if (data != null) {
          console.log("IF");

          this.setDataInCurrentUser(data.message)
        }
        else {
          console.log("ELSE");

          this.login.getCurrentUser().subscribe({
            next: data => {
              console.log(data.message);
              this.setDataInCurrentUser(data.message)

            }
          })
        }


      }
    })
  }

  isLogin() {
    this.login.isLoggedIn().subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }

  logout() {

    Swal.fire({
      title: "Do you want to Logout your account?",
      showDenyButton: true,
      confirmButtonText: "Logout",
      confirmButtonColor: 'red',
      denyButtonText: `Don't Logout`,
      denyButtonColor: 'blue',
      icon: 'info'
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

  setDataInCurrentUser(data: any) {
    this.currentUser = data
    this.userRole = this.currentUser.userRole
    this.imagePreview = ApiRoutes.IMAGE_URL + this.currentUser.profilePhoto
  }
}
