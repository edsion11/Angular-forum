import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  radius: number;
  color: string;
  ngOnInit(): void {}
  onAddSearch(): void {
    alert('搜索成功！');
  }
}
