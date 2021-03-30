import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  showAddStreamModal: boolean;
  //stream details array
  videoStreamDetails: Array<any>;

  constructor() {
    this.showAddStreamModal = false;
    this.videoStreamDetails = [];
   }
}
