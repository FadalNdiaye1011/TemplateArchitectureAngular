import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class CaptErrorInterceptor implements HttpInterceptor {

  // constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    let router = inject(Router);
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let err = error.error;
        if (error.status == 401 && error.statusText == "Unauthorized") {

          localStorage.clear();
          router.navigateByUrl('/auth');
        }
        if (!err.message) {
          err = {
            message: error.message,
            status: false,
            data: []
          }
        }
        throw (err);
      })
    );
  }
}
