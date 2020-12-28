import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScrollImgComponent } from './scroll-img.component';

describe('ScrollImgComponent', () => {
  let component: ScrollImgComponent;
  let fixture: ComponentFixture<ScrollImgComponent>;

  beforeEach(waitForAsync(() => {
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
