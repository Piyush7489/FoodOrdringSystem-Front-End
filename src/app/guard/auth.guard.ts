import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../servicce/auth.service';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../Comman-components/login/login.component';
@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(private login: AuthService, private router: Router) { }
  ROLE: any
  response:boolean = true
  canActivate(): boolean {


    if(this.login.isLoggedIn())
    {
      return true
    }
    this.router.navigate(['login'])
    return false;
  }

};