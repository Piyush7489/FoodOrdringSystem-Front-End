import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from '../Utils/api-routes';
import { AuthRequest } from '../Model/auth-request';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { CurrentUserResponse } from '../payload/Response/current-user-response';
import { EmailRequest } from '../payload/service-request/email-request';
import { UpdateUserRequest } from '../payload/service-request/update-user-request';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  public loginStatusSubject = new Subject<Boolean>();
  public currentUser = new BehaviorSubject<any>(null);
  public userRole = new BehaviorSubject<any>(null);
  public role = this.userRole.asObservable();
  public loginUserData = this.currentUser.asObservable();


  constructor(private http:HttpClient) { }

  public generateToken(request:AuthRequest):Observable<any>
  {
    return this.http.post<any>(ApiRoutes.GENERATE_TOKEN,request);
  }

  

  public loginUser(token: any) {

    localStorage.setItem('token', token);
    this.getCurrentUser().subscribe((data) => {
      this.currentUser.next(data);
      this.loginUserData.subscribe((data) => {
       

      })
    })
    return true;
  }

  //to check that user logged in or not
  public isLoggedIn(): Observable<boolean> {
    const tokenstr = localStorage.getItem('token');
    if (!tokenstr || tokenstr === '' || tokenstr === null) {
      this.loggedIn = false;
      return of(false); // Return an Observable emitting 'false'
    } else {
      this.loggedIn = true;
      return of(true); // Return an Observable emitting 'true'
    }
  }

  // SET USER IN LOCALSTORAGE
  public setUser(user: CurrentUserResponse) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //for logout the user
  logout()
  {
    localStorage.clear();
    this.loggedIn = false;
    return true;
  }

  //for getting the token
  getToken()
  {
    return localStorage.getItem('token');
  }

  getCurrentUser():Observable<any>
  {
    return this.http.get<any>(ApiRoutes.GET_CURRENT_USER);
  }

  isTokenExpired() {
    let token = this.getToken();
    if (token != null) {
      const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
      return (Math.floor((new Date).getTime() / 1000)) >= expiry

    }
    return false;
  }


   //get user
   public getuser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    }
    else {
      this.logout();
      return null;
    }
  }

  getUserRole() 
  {
    return localStorage.getItem('ROLE')
  }

 
 
  public SignupForm(signup:any)
  {
    return this.http.post(ApiRoutes.SIGNUP,signup);
  }
  public forgetPassCheckEmail(emailData:EmailRequest)
  {
    return this.http.post(ApiRoutes.FORGET_PASS_GENERATE_OTP,emailData);
  }
  public newPassForForgetPass(email:any,pass:any)
  {
    return this.http.get(ApiRoutes.NEW_PASS_FOR_FORGET_PASS+`${email}/${pass}`);
  }

  public changePassword(changePassword:any)
  {
    return this.http.post(ApiRoutes.CHANGE_PASS,changePassword);
  }

  public updateUser(userId:String,userUpdate:UpdateUserRequest)
  {
    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
      //'Content-type':'multipart/form-data;boundary=BOEC8DO7-EBF1-4EA7-966C-E492A9F2C36E'
    });
    const userImage = userUpdate.profilePhoto
    const formData = new FormData();
    typeof userUpdate.profilePhoto !=='string'&&
    formData.append('userImage',userUpdate.profilePhoto);
    userUpdate.profilePhoto=''
    const user = JSON.stringify(userUpdate) 
    console.log(userImage);
    // formData.append('user',JSON.stringify(userUpdate));
    
    // formData.append('lastName',userUpdate.lastName);
    // formData.append('email',userUpdate.email);
    // formData.append('mob',userUpdate.mob);
    // formData.append('tempAddress',userUpdate.tempAddress);
    // typeof userUpdate.profilePhoto !=='string'&&
    // formData.append('profilePhoto',userUpdate.profilePhoto);
    

    return this.http.put(ApiRoutes.UPDATE_USER+`${userId}`+"/"+`${user}`,formData,{headers});
    // 
    
    // return this.http.put(ApiRoutes.UPDATE_USER+`${userId}`+"/"+`${user}`,userImage);
  }

}
