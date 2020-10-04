import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  constructor(public route: ActivatedRoute, public postService: PostsService) {}
  public key: number = 0;
  public content = '';
  public title = '';
  public Editor = ClassicEditor;
  ngOnInit(): void {
    const that = this;
    this.route.params.subscribe((key) => {
      that.key = key.key;
    });
    this.content = this.postService.posts[this.key].content;
    this.title = this.postService.posts[this.key].title;
  }
  postChanged() {
    this.postService.posts[this.key].content = this.content;
    this.postService.posts[this.key].title = this.title;
    this.postService.editPost(this.key);
  }
}
