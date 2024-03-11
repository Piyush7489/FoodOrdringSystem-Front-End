import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from '../Utils/api-routes';
import { AuthRequest } from '../Model/auth-request';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { CurrentUserResponse } from '../payload/Response/current-user-response';
import { EmailRequest } from '../payload/service-request/email-request';
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
      // alert((Math.floor((new Date).getTime() / 1000)) >= expiry)
      return (Math.floor((new Date).getTime() / 1000)) >= expiry;

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
}
