import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from '../Utils/api-routes';
import { AuthRequest } from '../Model/auth-request';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public generateToken(request:AuthRequest):Observable<any>
  {
    return this.http.post<any>(ApiRoutes.GENERATE_TOKEN,request);
  }

  loginUser(token:any)
  {
    localStorage.setItem('token',token);
  }

  //to check that user logged in or not
  isLoggesIn()
  {
    let token=localStorage.getItem('token');
    if(token==undefined||token==''||token==null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  //for logout the user
  logout()
  {
    localStorage.removeItem('token');
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
}
