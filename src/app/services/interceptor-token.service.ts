import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest  } from '@angular/common/http';
import { GenerationTokenService } from './generation-token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorTokenService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if(token){
      req = req.clone({
        headers: req.headers.set("Authorization", 'Bearer '+ token)
      });
      req = req.clone({
        headers: req.headers.set("Accept", 'application/json')
      });
      return next.handle(req);
    }
    return next.handle(req);
  }


}
