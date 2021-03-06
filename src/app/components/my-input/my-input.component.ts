import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css']
})
export class MyInputComponent implements OnInit {

  constructor() { }
  public inputValue = '';
  @ViewChild('search') search;
  ngOnInit(): void {
    
  }
  onAddSearch(): void {
    window.location.href = 'https://www.baidu.com/s?wd=' + this.inputValue;
    this.inputValue = '';
  }
}
