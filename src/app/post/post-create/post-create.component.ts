import { AuthService } from './../../user/UserService/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../post.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  constructor(public postsService: PostsService, public auth: AuthService) {}
  public username = '';
  ngOnInit(): void {
    this.username = this.auth.username || 'admin';
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(
      form.value.title,
      form.value.content,
      this.username
    );
    form.resetForm();
  }
}
