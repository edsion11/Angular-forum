import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../post.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  constructor(public postsService: PostsService, private router: Router) {}
  posts: Post[] = [];
  private postsSub: Subscription;
  ngOnInit(): void {
    const that = this;
    this.postsService.getPost().subscribe((data) => {
      that.posts = data.posts;
    });
    this.postsSub = this.postsService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
  /**
   * 删除功能
   * @param data 获取posts下标
   */
  delete(data) {
    let _id = this.posts[data]._id;
    const that = this;
    this.postsService.deletePost(_id).subscribe((msg) => {
      if (msg.success) {
        that.posts.splice(data, 1);
        console.log(msg.message);
      } else {
        console.log(msg.message);
        return;
      }
    });
  }
  EditPost(key) {
    let data = JSON.parse(JSON.stringify(this.posts[key]));
    data.id = key;
    console.log(data);
    this.router.navigate(['/EditPost', data]);
  }
}
