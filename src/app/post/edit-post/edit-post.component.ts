import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }
  content = ''
  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      this.content = data.content
    })
  }

}
