import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  constructor(public postsService: PostsService) {}
  /*   posts = [
    { title: 'First Post', content: " This is the first post's content" },
    { title: 'Second Post', content: " This is the second post's content" },
    { title: 'Third Post', content: " This is the third post's content" },
  ]; */
  posts: Post[] = [];
  private postsSub: Subscription;
  ngOnInit(): void {
    this.posts = this.postsService.getPost();
    this.postsSub = this.postsService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
