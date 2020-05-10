import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [
    { title: 'First Post', content: " This is the first post's content" },
    {
      title: 'MVC',
      content:
        'MVC背后的核心理念就是，你在你的代码之间明确分离管理数据（模型），应用程序逻辑（控制器），并将数据给用户（视图）。  视图从模型中获取数据展示给用户。当用户通过点击或者输入和应用程序进行交互时，控制器通过改变模型中的数据响应。最终，模型层通知视图层，已经发生改变，一边更新显示。 在Angular 应用中，视图层就是DOM，控制器就JavaScript类，模型数据存储在对象属性中。 ',
    },
  ];
  private postUpdated = new Subject<Post[]>();
  getPost() {
    return this.posts;
  }
  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }
  addPost(title: string, content: string) {
    const post: Post = { title: title, content: content };
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }
}
