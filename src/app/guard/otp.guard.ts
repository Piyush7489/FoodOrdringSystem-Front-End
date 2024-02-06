import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../servicce/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class otpGuard implements CanActivate {
  constructor(private login:AuthService,private router:Router){}

  canActivate(): boolean {
    
    let user = localStorage.getItem('fakeUser')

      if(user != null)
      {
       return true;
      }
      this.router.navigate(['signup'])
      return false;
  }

};
