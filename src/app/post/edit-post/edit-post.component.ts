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
  content = '';
  title = '';
  id = Number.MAX_SAFE_INTEGER;
  _id = '';
  public Editor = ClassicEditor;
  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.content = data.content;
      this.title = data.title;
      this.id = data.id;
      this._id = data._id;
    });
  }
  postChanged() {
    this.postService.editPost(this.title, this.content, this.id, this._id);
  }
}
