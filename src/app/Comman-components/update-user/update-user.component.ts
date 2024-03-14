import { Component, OnInit } from '@angular/core';
import { CurrentUserResponse } from 'src/app/payload/Response/current-user-response';
import { ApiRoutes } from 'src/app/Utils/api-routes';
import { AuthService } from 'src/app/servicce/auth.service';
import { UpdateUserRequest } from 'src/app/payload/service-request/update-user-request';
import Toasts from 'src/app/Utils/Toast';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private login: AuthService,private router:Router,private snack:MatSnackBar) { }
  currentUser: CurrentUserResponse = new CurrentUserResponse;
  updateRequest:UpdateUserRequest = new UpdateUserRequest;
  imagePreview: any
  profilePhoto: any
  ngOnInit(): void {
    this.getCurrentUser()
  }


  getCurrentUser() {
    this.login.loginUserData.subscribe({
      next: (data: any) => {
        this.currentUser = data.message
        this.changeCurrentUserResponseToUpdateUserReq(this.currentUser)
        this.imagePreview = ApiRoutes.IMAGE_URL + this.currentUser.profilePhoto
      }
    })
  }

  onChangeProfile(event: any) {
    this.profilePhoto = event.target.files[0]
    this.updateRequest.profilePhoto = event.target.files[0]
    console.log(this.updateRequest.profilePhoto);
    
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);

  }


  updateUserProfile() {

    if (
      this.updateRequest.email === "" || 
      this.updateRequest.firstName === "" || this.updateRequest.lastName === "" ||
      this.updateRequest.tempAddress === ""|| this.updateRequest.mob === ""
    ) {
      this.snack.open("!! cheak all fields","👍ok",{
        direction:'ltr',
        duration:3000
      });
      return;
    }
    
    this.login.updateUser(this.currentUser.userId,this.updateRequest).subscribe({
      next:(data:any)=>{
        console.log(data);
        Toasts.fire({
          icon:'success',
          text:data.message,
          timer:3000
        }).then(e=>{
          this.router.navigate([this.login.getUserRole()?.toLowerCase()])
        })
        
      },error:err=>{
        console.log(err);
        
      }
    })
  }

  changeCurrentUserResponseToUpdateUserReq(currUser:CurrentUserResponse)
  {
    this.updateRequest.userId = currUser.userId
    this.updateRequest.firstName = currUser.firstName
    this.updateRequest.lastName = currUser.lastName
    this.updateRequest.email = currUser.email
    this.updateRequest.mob = currUser.mob
    this.updateRequest.tempAddress = currUser.tempAddress
  }
}
