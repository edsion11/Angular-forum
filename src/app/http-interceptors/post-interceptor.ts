import {Injectable} from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

const MAX_RETRY_NUM = 2;
@Injectable()
export class  PostInterceptor implements  HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let errorCount = 0;
    return next.handle(req).pipe(
      catchError((err, err$) => {
        errorCount++;
        const tip = err.status === 200 ? err.body.error.reason : '系统繁忙，请稍后再试';
        console.log(tip, '后端接口报错');
        if (err.status === 400 && errorCount < MAX_RETRY_NUM) {
          console.log(errorCount, '重试次数');
          return err$;
        } else {
          throw err;
        }
      })
    );
  }
}
