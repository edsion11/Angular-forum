import {Component, OnInit, AfterViewInit, Input, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../post.service';
import {EventEmitter} from 'events';
import {WasmService} from '../wasm.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  constructor(public route: ActivatedRoute, public postService: PostsService, public wasmService: WasmService) {}
  public key = 0;
  public content = '';
  public title = '';
  public data = '';
  valChange = new EventEmitter();
  text = document.getElementsByTagName('textarea');
  ngOnInit(): void {
    const that = this;
    this.route.params.subscribe((key) => {
      that.key = key.key;
    });
    // @ts-ignore
    window.markdown.ready.then(markdown => {
      that.data = markdown.parse(that.postService.posts[that.key].content);
    });
    that.content = that.postService.posts[that.key].content;
    that.title = that.postService.posts[that.key].title;
  }

  onchange(){
    this.reset();
    setTimeout(() => {
      this.valChange.emit(this.content);
      this.reset();
      // @ts-ignore
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
}
