import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-markdown-preview',
  templateUrl: './markdown-preview.component.html',
  styleUrls: ['./markdown-preview.component.css']
})
export class MarkdownPreviewComponent implements OnInit {

  constructor() { }
  @Input data: string;
  ngOnInit(): void {
  }
}
