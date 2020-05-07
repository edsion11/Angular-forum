import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollImgComponent } from './scroll-img.component';

describe('ScrollImgComponent', () => {
  let component: ScrollImgComponent;
  let fixture: ComponentFixture<ScrollImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
