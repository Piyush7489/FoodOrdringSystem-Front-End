import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../servicce/auth.service';
import { Observable } from 'rxjs';

export class adminGuard implements CanActivate {
  constructor(private service:AuthService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   if(this.service.isLoggesIn())
   {
    return true;
   }
   else
   {
    this.router.navigate(['/login'])
    return false
   }
  }
  
};
