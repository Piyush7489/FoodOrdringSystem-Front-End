import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../servicce/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class adminGuard implements CanActivate {
  constructor(private login:AuthService,private router:Router){}
  

  canActivate(): boolean {
    
    if(this.login.isLoggedIn() && (this.login.getUserRole()=="ADMIN")) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

};
