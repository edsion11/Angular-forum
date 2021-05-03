import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../post.service';
import {EventEmitter} from 'events';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  constructor(public route: ActivatedRoute, public postService: PostsService) {}
  public key = 0;
  public content = '';
  public title = '';
  public data = '';
  public isShow = false;
  public showButton = '预览';
  valChange = new EventEmitter();
  text = document.getElementsByTagName('textarea');
  ngOnInit(): void {
    console.log('init');
    this.route.params.subscribe((data) => {
      this.key = data.key;
    });
    window.markdown.ready.then(markdown => {
      this.data = markdown.parse(this.postService.posts[this.key].content);
    });
    this.content = this.postService.posts[this.key].content;
    this.title = this.postService.posts[this.key].title;
  }
  onchange(){
    this.reset();
    setTimeout(() => {
      this.valChange.emit(this.content);
      this.reset();
      window.markdown.ready.then(markdown => {
        this.data = markdown.parse(this.content);
      });
    });
  }
  reset(){
    if (this.text[1].scrollHeight - this.text[0].scrollHeight > 0){
      this.text[0].style.height = (this.text[1].scrollHeight + 200) + 'px';
    }
  }
  postChanged() {
    this.postService.posts[this.key].content = this.content;
    this.postService.posts[this.key].title = this.title;
    this.postService.editPost(this.key);
  }
  translateData(){
    this.isShow ? this.showButton = '预览' : this.showButton = '返回';
    this.isShow = !this.isShow;
    setTimeout(() => {
      document.querySelectorAll('pre code[class^="language-"]').forEach(block => {
        hljs.highlightBlock(block);
      })
    })
  }
}
