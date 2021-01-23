import {Injectable} from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthService} from '../user/UserService/auth.service';
import {PostsService} from '../post/post.service';

const MAX_RETRY_NUM = 2;
@Injectable()
export class  PostInterceptor implements  HttpInterceptor{
  constructor(private auth: AuthService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let errorCount = 0;
    return next.handle(req).pipe(
      catchError((err, err$) => {
        this.auth.network = false;
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
