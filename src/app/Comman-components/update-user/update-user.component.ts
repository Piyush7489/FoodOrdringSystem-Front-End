import { Component, OnInit } from '@angular/core';
import { CurrentUserResponse } from 'src/app/payload/Response/current-user-response';
import { ApiRoutes } from 'src/app/Utils/api-routes';
import { AuthService } from 'src/app/servicce/auth.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  constructor(private login:AuthService){}
  currentUser:CurrentUserResponse = new CurrentUserResponse;
  imagePreview:any
  profilePhoto:any
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

  onChangeProfile(event:any){
    console.log(event.target.files[0])
    this.profilePhoto = event.target.files[0]
    console.log(this.profilePhoto);
    
      const file = event.target.files[0];
      const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
      console.log(this.imagePreview);
      
    };
    reader.readAsDataURL(file);

  }


  updateUserProfile()
  {
    alert("Hello")
  }
}
