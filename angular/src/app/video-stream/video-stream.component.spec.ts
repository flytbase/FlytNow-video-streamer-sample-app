import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VideoStreamComponent } from './video-stream.component';

describe('VideoStreamComponent', () => {
  let component: VideoStreamComponent;
  let fixture: ComponentFixture<VideoStreamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
