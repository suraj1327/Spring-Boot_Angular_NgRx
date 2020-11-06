import {HttpEvent,HttpHandler,HttpErrorResponse,HttpInterceptor,HttpRequest} from '@angular/common/http';

import {Observable,throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

export class HttpIntercept implements HttpInterceptor{
    intercept(
        request:HttpRequest<any>,
        next: HttpHandler
    ) :Observable<HttpEvent<any>>{
        return next.handle(request)
        .pipe(catchError((err:HttpErrorResponse)=>{
            let errorMessage = '';
            if (err.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              errorMessage = `An error occurred: ${err.error.message}`;
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
              console.log(errorMessage,"errorMessage");
            }
            console.error(errorMessage);
            return throwError(errorMessage);
            
    })
)
}
}

