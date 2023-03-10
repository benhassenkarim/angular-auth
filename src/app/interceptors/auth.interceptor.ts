import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";
import {catchError, switchMap} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
refresh=false;
  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req=request.clone({
      setHeaders: {

        'Authorization': `Bearer ${this.authService.accessToken}`,
      },
    });
    return next.handle(req).pipe(catchError((err:HttpErrorResponse)=>{
      if(err.status===401 && !this.refresh){
        this.refresh=true;
return this.authService.refresh().pipe(
  switchMap((res:any)=>{
    this.authService.accessToken=res.token;
    return next.handle(request.clone({
      setHeaders: {

        'Authorization': `Bearer ${this.authService.accessToken}`,
      },
    }));
  })
)
      }
      this.refresh=true;
      return throwError(()=>err);
    }));
  }
}
