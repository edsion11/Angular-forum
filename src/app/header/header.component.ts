import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  public inputValue = '';
  radius: number;
  color: string;
  ngOnInit(): void {}
  onAddSearch(): void {
    window.location.href = 'https://www.baidu.com/s?wd=' + this.inputValue;
    this.inputValue = '';
  }
}
