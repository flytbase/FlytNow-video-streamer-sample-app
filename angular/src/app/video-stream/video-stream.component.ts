import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import {
  getStreamer,
  changeStream,
  REQUEST_TYPE_ENUM,
} from '@flytnow/video-client-staging';
import { MillicastStreamer } from '@flytnow/video-client-staging/dist/classes/MillicastClient.class';
import { OpentokStreamer } from '@flytnow/video-client-staging/dist/classes/OpentokClient.class';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-video-stream',
  templateUrl: './video-stream.component.html',
  styleUrls: ['./video-stream.component.css'],
})
export class VideoStreamComponent implements AfterViewInit {
  @Input() videoStreamDetail: any;
  element_id: string;
  videoFeed: OpentokStreamer | MillicastStreamer;
  failedFeed: boolean;
  archivingActive: boolean;
  msg: String;
  requestType = REQUEST_TYPE_ENUM;
  @ViewChild('video_element') htmlELement;
  feedType: string = '';
  constructor(private _spinner: NgxSpinnerService) {}

  ngAfterViewInit(): void {
    // Drafting an element_id
    this.element_id =
      this.videoStreamDetail.vehicle_id +
      '-' +
      this.videoStreamDetail.source_id;
    this.failedFeed = false;
    this.archivingActive = false;
    //Initializing Feed
    this.init();
  }

  async init() {
    try {
      this._spinner.show();
      this.videoFeed = await getStreamer(
        this.videoStreamDetail.api_key,
        this.videoStreamDetail.vehicle_id,
        this.videoStreamDetail.token,
        this.videoStreamDetail.source_id,
        'flytos',
        this.htmlELement.nativeElement,
        0
      );
      this.feedType = this.videoFeed.streamType();
      this._spinner.hide();
    } catch (err) {
      this._spinner.hide();
      this.msg =
        'Error while initializing video feed, check console for more info';
    }
  }

  getSnapShot() {
    //Method to get raw image snapshot in Base64
    if (this.videoFeed) {
      console.log('Image Raw Data=>', this.videoFeed.getImageData());
      this.msg = 'Image Raw Data Logged to Console.';
    }
  }

  async startRecording() {
    //Method to start video recording on S3
    if (this.videoFeed) {
      let response = await this.videoFeed.startArchiving();
      if (response['status']) {
        this.archivingActive = true;
        this.msg = 'Recording Started Successfully';
      } else {
        this.msg = `Start Archiving - Failed
        ErrorCode: ${response['code']}
        Message:${response['message']}`;
      }
    }
  }
  async stopRecording() {
    //Method to stop video recording on S3
    if (this.videoFeed) {
      let response = await this.videoFeed.stopArchiving();
      if (response['status']) {
        this.archivingActive = false;
        this.msg = 'Recording Stopped Successfully';
      } else {
        this.msg = `Stop Archiving - Failed
        ErrorCode: ${response['code']}
        Message:${response['message']}`;
      }
    }
  }
  async capture() {
    //Method to capture a snapshot and upload it to S3
    if (this.videoFeed) {
      let response = await this.videoFeed.captureImageAndArchive();
      if (response['status']) {
        this.msg = 'Image Captured and archived';
      } else {
        this.msg = `Capture and Archive - Failed
        ErrorCode: ${response['code']}
        Message:${response['message']}`;
      }
    }
  }
  async getStats() {
    this.videoFeed.getStats().subscribe((stats) => {
      console.log(stats);
    });
  }

  disconnect() {
    try {
      if (this.videoFeed) {
        this.videoFeed.disconnect();
      }
      return;
    } catch (err) {
      return;
    }
  }

  refresh() {
    if (this.videoFeed) {
      this.videoFeed.reconnect();
    }
  }

  toggleStream(): number {
    if (this.videoFeed) {
      return this.videoFeed.streamType() == 'opentok' ? 1 : 0;
    } else {
      return 0;
    }
  }

  async changeStream() {
    try {
      this._spinner.show();
      await this.disconnect();
      this.videoFeed = await changeStream(
        this.videoStreamDetail.api_key,
        this.videoStreamDetail.vehicle_id,
        this.videoStreamDetail.token,
        this.videoStreamDetail.source_id,
        this.htmlELement.nativeElement,
        'flytos',
        this.toggleStream()
      );
      this._spinner.hide();
      this.feedType = this.videoFeed.streamType();
    } catch (err) {
      this.msg = err;
      this._spinner.hide();
    }
  }
}
