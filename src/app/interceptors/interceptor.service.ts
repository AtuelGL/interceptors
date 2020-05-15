import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const headers = new HttpHeaders({
        'token-user': 'SDJK51631GSLGSR62626'
      });

      const reqClone = req.clone({
        headers
      });



      return next.handle(reqClone).pipe(
        catchError(this.manageError)
      )
    }

    manageError(err: HttpErrorResponse){
      console.log('sucedió un error');
      console.log('registrado en el log file');
      console.warn(err);
      return throwError('error personalizado');
}

}
