import { Post } from './post';
import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {AuthService} from '../user/UserService/auth.service';

interface Getposts {
  success: boolean;
  posts?: [];
  message: string;
}
interface PostRes {
  success: boolean;
  message: string;
}

interface Deleteposts {
  success: boolean;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient, private auth: AuthService) {}
  private localPosts = [{_id: '5f780f34c3af53348887a10d', userid: 1, username: 'admin', title: 'Angular(1)', content: 'Angular 是一个应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用。这份 Angular 文档会帮助你学习和使用 Angular 框架与开发平台，从你的第一个应用开始，一直到优化复杂的企业级单'}, {_id: '5f780f55c3af53348887a10e', userid: 1, username: 'admin', title: 'Angular(1)', content: 'Angular 是一个应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用。这份 Angular 文档会帮助你学习和使用 Angular 框架与开发平台，从你的第一个应用开始，一直到优化复杂的企业级单页面应用。 这些教程和指南中都包含可下载的范例，以加速你的学习。'}, {_id: '5f780f5bc3af53348887a10f', userid: 1, username: 'admin', title: 'Angular(1)', content: 'Angular 是一个应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用。这份 Angular 文档会帮助你学习和使用 Angular 框架与开发平台，从你的第一个应用开始，一直到优化复杂的企业级单页面应用。 这些教程和指南中都包含可下载的范例，以加速你的学习。'}, {_id: '5f780f61c3af53348887a110', userid: 1, username: 'admin', title: 'Angular(1)', content: 'Angular 是一个应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用。这份 Angular 文档会帮助你学习和使用 Angular 框架与开发平台，从你的第一个应用开始，一直到优化复杂的企业级单页面应用。 这些教程和指南中都包含可下载的范例，以加速你的学习。'}, {_id: '5f780f6ac3af53348887a111', userid: 1, username: 'admin', title: 'Angular(1)', content: 'Angular 是一个应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用。这份 Angular 文档会帮助你学习和使用 Angular 框架与开发平台，从你的第一个应用开始，一直到优化复杂的企业级单页面应用。 这些教程和指南中都包含可下载的范例，以加速你的学习。'}, {_id: '5f780f71c3af53348887a112', userid: 1, username: 'admin', title: 'Angular(1)', content: 'Angular 是一个应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用。这份 Angular 文档会帮助你学习和使用 Angular 框架与开发平台，从你的第一个应用开始，一直到优化复杂的企业级单页面应用。 这些教程和指南中都包含可下载的范例，以加速你的学习。'}, {_id: '5f796fa9e56fe44ac08af5b1', title: 'React', username: 'admin', content: '我是react', __v: 0}, {_id: '5f796fbc680a052590815467', title: 'React', username: 'admin', content: '我是react'}, {_id: '5f796fbd680a052590815468', title: 'React', username: 'admin', content: '我是react'}, {_id: '5f79785b680a05259081546a', title: 'Vue', username: 'admin', content: 'Vue测试'}];
  public posts: Post[] = [
    {_id: '5f780f34c3af53348887a10d', userid: 1, username: 'admin', title: 'Angular(1)', content: 'Angular 是一个应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用。这份 Angular 文档会帮助你学习和使用 Angular 框架与开发平台，从你的第一个应用开始，一直到优化复杂的企业级单'},
    {_id: '5f780f55c3af53348887a10e', userid: 1, username: 'admin', title: 'Angular(1)', content: 'Angular 是一个应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用。这份 Angular 文档会帮助你学习和使用 Angular 框架与开发平台，从你的第一个应用开始，一直到优化复杂的企业级单页面应用。 这些教程和指南中都包含可下载的范例，以加速你的学习。'},
    {_id: '5f780f5bc3af53348887a10f', userid: 1, username: 'admin', title: 'Angular(1)', content: 'Angular 是一个应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用。这份 Angular 文档会帮助你学习和使用 Angular 框架与开发平台，从你的第一个应用开始，一直到优化复杂的企业级单页面应用。 这些教程和指南中都包含可下载的范例，以加速你的学习。'},
    {_id: '5f780f61c3af53348887a110', userid: 1, username: 'admin', title: 'Angular(1)', content: 'Angular 是一个应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用。这份 Angular 文档会帮助你学习和使用 Angular 框架与开发平台，从你的第一个应用开始，一直到优化复杂的企业级单页面应用。 这些教程和指南中都包含可下载的范例，以加速你的学习。'},
    {_id: '5f780f6ac3af53348887a111', userid: 1, username: 'admin', title: 'Angular(1)', content: 'Angular 是一个应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用。这份 Angular 文档会帮助你学习和使用 Angular 框架与开发平台，从你的第一个应用开始，一直到优化复杂的企业级单页面应用。 这些教程和指南中都包含可下载的范例，以加速你的学习。'},
    {_id: '5f780f71c3af53348887a112', userid: 1, username: 'admin', title: 'Angular(1)', content: 'Angular 是一个应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用。这份 Angular 文档会帮助你学习和使用 Angular 框架与开发平台，从你的第一个应用开始，一直到优化复杂的企业级单页面应用。 这些教程和指南中都包含可下载的范例，以加速你的学习。'},
    {_id: '5f796fa9e56fe44ac08af5b1', title: 'React', username: 'admin', content: '我是react'},
    {_id: '5f796fbc680a052590815467', title: 'React', username: 'admin', content: '我是react'},
    {_id: '5f796fbd680a052590815468', title: 'React', username: 'admin', content: '我是react'},
    {_id: '5f79785b680a05259081546a', title: 'Vue', username: 'admin', content: 'Vue测试'}, {_id: '5f79857a680a05259081546b', title: 'hello world', username: 'admin', content: 'hello!'}];
  private postUpdated = new Subject<Post[]>();
  getPost() {
    setTimeout(() => {
      this.postUpdated.next(this.localPosts);
    }, 0);
    const posturl = '/api/userApi/posts?username=admin';
    this.http.get<Getposts>(posturl).subscribe((data) => {
        this.auth.network = true;
        this.posts = data.posts;
        this.postUpdated.next(data.posts);
    });
  }
  postsInit(){
    this.getPost();
  }
  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }
  addPost(title: string, content: string, username: string) {
    const post: Post = { title, content, username };
    this.posts.push(post);
    console.log(post);
    this.postUpdated.next([...this.posts]);
    this.http
      .post<PostRes>('/api/userApi/addPost', { title, content, username })
      .subscribe((data) => {
        console.log(data.message);
      });
  }
  editPost(key) {
    const { _id, title, content } = this.posts[key];
    this.http
      .put('/api/userApi/editPosts', {
        _id,
        title,
        content,
      })
      .subscribe((data) => {
        console.log(data);
      });
    this.postUpdated.next([...this.posts]);
  }
  deletePost(id) {
    let url = '/api/userApi/delete?id=';
    url = url + id;
    return this.http.delete<Deleteposts>(url);
  }
}
