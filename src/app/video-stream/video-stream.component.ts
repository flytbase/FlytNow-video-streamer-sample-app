import { Component, Input, OnInit } from '@angular/core';
import { VideoStreamer } from '@flytnow/video-client';
@Component({
  selector: 'app-video-stream',
  templateUrl: './video-stream.component.html',
  styleUrls: ['./video-stream.component.css']
})
export class VideoStreamComponent implements OnInit {

  @Input() videoStreamDetail: any;
  element_id: String;
  videoFeed: any;
  failedFeed: boolean;
  archivingActive: boolean;
  msg: String;
  constructor() {
  }
  ngOnInit(): void {
    // Drafting an element_id
    this.element_id = this.videoStreamDetail.vehicle_id + '-' + this.videoStreamDetail.source_id;
    this.failedFeed = false;
    this.archivingActive = false;
    //Initializing Feed
    this.initFeed();
  }

  async initFeed() {
    // Instantiating VideoStreamer Object 
    // which will expose all the API methods once connection is established
    this.videoFeed = await new VideoStreamer(this.videoStreamDetail.api_key,
      this.videoStreamDetail.vehicle_id,
      this.videoStreamDetail.source_id,
      this.element_id);
    // Checking for connection failure
    if (this.videoFeed['status']===false) {
      console.log("Something went wrong.")
      this.msg = ` Failed
      ErrorCode: ${this.videoFeed['code']}
      Message:${this.videoFeed['message']}`;
      this.failedFeed = true;
    } else {
      //Connection Successful
      console.log("Feed Active for ", this.videoStreamDetail.vehicle_id, " with source-id ", this.videoStreamDetail.source_id);
    }
  }

  
  
  getSnapShot() {
    //Method to get raw image snapshot in Base64
    if (this.videoFeed) {
      console.log('Image Raw Data=>', this.videoFeed.getImageData());
      this.msg="Image Raw Data Logged to Console."
    }
  }

  async startRecording() {
    //Method to start video recording on S3
    if (this.videoFeed) {
      let response = await this.videoFeed.startArchiving();
      if (response['status']) {
        this.archivingActive = true;
        this.msg="Recording Started Successfully"
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
        this.msg="Recording Stopped Successfully"
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
        this.msg="Image Captured and archived"
      } else {
        this.msg = `Capture and Archive - Failed
        ErrorCode: ${response['code']}
        Message:${response['message']}`;
      }
    }
  }
  async getStats() {
    // Method to get stats of the connection
    if (this.videoFeed) {
      let response = await this.videoFeed.getStats();
      if (response) {
        this.msg="Statistics Logged to Console."
        console.log("Statistics->", response);
      } else {
        this.msg="Couldn't find Feed Statistics."
      }
    }
  }

}
