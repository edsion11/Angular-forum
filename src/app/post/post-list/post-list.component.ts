import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  HostBinding,
} from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../post.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {
  query,
  stagger,
  style,
  transition,
  trigger,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.card,p,div', [
          style({ opacity: 0, transform: 'translateY(-100px)' }),
          stagger(-30, [
            animate(
              '500ms cubic-bezier(0.35,0,0.25,1)',
              style({
                opacity: 1,
                transform: 'none',
              })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class PostListComponent implements OnInit, OnDestroy {
  @HostBinding('@pageAnimations')
  public animatePage = true;
  constructor(public postsService: PostsService, private router: Router) {}
  posts: Post[] = [];
  private postsSub: Subscription;
  ngOnInit(): void {
    const that = this;
    this.postsService.postsInit();
    this.postsSub = this.postsService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        console.log('subscribe', posts);
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
    const _id = this.posts[data]._id;
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
}
