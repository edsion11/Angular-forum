import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  constructor() {}
  /*
  自定义数据
  */
  /*-----------------------------------------------------------------------*/
  /*
  下面是自定义函数
  */
  enterTitle = '';
  postTitle = 'No content';
  ngOnInit(): void {}
  onAddPost(): void {
    // alert('Save success!');
    // console.dir(postTitle);
    this.postTitle = this.enterTitle;
    console.log(this.postTitle);
  }
  ClearPost(): void {
    // alert('Clear success!');
  }
}
