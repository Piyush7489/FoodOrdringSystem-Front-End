import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../servicce/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private login: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = request;
    const token = this.login.getToken();

    if (token !== null) {
      authReq = authReq.clone({
        setParams: { Authorization: `${token}` }
      });
     
    }
    

    console.log(authReq);

    return next.handle(authReq).pipe(
      catchError((error: any) => {
      //  alert('hi')
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
        });

        if (error.status === 401 || error.status === 0) {
          //alert('hi')
          if (this.login.isTokenExpired()) {
            localStorage.clear()
            Toast.fire({
              icon: 'error',
              title: 'Session Expired  !!'
            });
         //   this.login.logout();
            this.router.navigate(['login']);
          }
        }

        console.error(error);
        return throwError(() => error);
      })
    );
  }
}

export const authInterceptorProviders = [
  {
    // provide: [HTTP_INTERCEPTORS,NavbarComponent],
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  },
];
