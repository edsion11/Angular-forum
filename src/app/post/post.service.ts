import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}
  // tslint:disable-next-line: variable-name
  private post_url = 'http://localhost:3001/posts';
  private ServicePosts: Post[] = [];
  private posts: Post[] = [];

  private postUpdated = new Subject<Post[]>();

  getPost() {
    const that = this;
    /* return this.http.get(this.post_url).subscribe((data) => data); */
    this.http.get(this.post_url).subscribe((data) => {
      Object.keys(data).forEach((key) => {
        that.posts.push(data[key]);
      });
    });
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
}
