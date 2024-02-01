import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../servicce/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private login:AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = request;
    const token=this.login.getToken();
    console.log("inside interceptor...");
    if(token!=null)
    {
      authReq=authReq.clone({
        setParams:{Authorization:`${token}`}
      });
    }
    
    return next.handle(authReq);
  }
}

export const authInterceptorProviders=[
  {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true,
  }
]