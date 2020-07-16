import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}
  /*
  跨域资源在GIthub上用my-json0-server生成服务器json文件
  如果继续使用get()请求，不能获取，由于浏览器的CORS
  跨域资源共享(CORS) 是一种机制，它使用额外的 HTTP 头来告诉浏览器
   让运行在一个 origin (domain) 上的Web应用被准许访问来自不同源服务器上的指定的资源。
   当一个资源从与该资源本身所在的服务器不同的域、协议或端口请求一个资源时，资源会发起一个跨域 HTTP 请求。
   出于安全原因，浏览器限制了发起跨站请求，也可能是跨站请求可以正常发起，但是返回结果被浏览器拦截了。
   这意味着使用这些API的Web应用程序只能从加载应用程序的同一个域请求HTTP资源，除非响应报文包含了正确CORS响应头。
  */
  // tslint:disable-next-line: variable-name
  private post_url =
    'https://my-json-server.typicode.com/edsion11/JSON-API/posts';

  /*
    get()请求获取localhost本地资源，不跨域
    */
  /* private post_url = 'http://localhost:3001/posts'; */
  private ServicePosts: Post[] = [];
  private posts: Post[] = [];

  private postUpdated = new Subject<Post[]>();

  getPost() {
    const that = this;
    /* return this.http.get(this.post_url).subscribe((data) => data); */
    if (that.posts.length === 0) {
      this.http.jsonp(this.post_url, 'callback').subscribe((data) => {
        Object.keys(data).forEach((key) => {
          that.posts.push(data[key]);
        });
      });
    }
    return this.posts;
  }

  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }
  addPost(title: string, content: string) {
    const post: Post = { title, content };
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }
  editPost(title: string, content: string){

  }
}
