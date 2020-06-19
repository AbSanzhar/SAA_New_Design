import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const token = localStorage.getItem('token')
        if(token){
            const cloned = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            })
            return next.handle(cloned)
        }else{
            return next.handle(req)
        }
    }

}
