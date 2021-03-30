import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StateService } from '../state.service';

@Component({
  selector: 'app-add-stream-modal',
  templateUrl: './add-stream-modal.component.html',
  styleUrls: ['./add-stream-modal.component.css']
})
export class AddStreamModalComponent implements OnInit {
  public addStreamForm: FormGroup;

  constructor(public State:StateService) { }

  ngOnInit(): void {
    //form
    this.addStreamForm = new FormGroup({
      api_key: new FormControl('', [Validators.required]),
      vehicle_id: new FormControl('', [Validators.required]),
      source_id: new FormControl('', [Validators.required])
    });
  }

  addVideoStream() {
    // add stream details to an array
  this.State.videoStreamDetails.push({
      api_key: this.addStreamForm.value.api_key,
      vehicle_id: this.addStreamForm.value.vehicle_id,
      source_id: this.addStreamForm.value.source_id,
  });
    this.State.showAddStreamModal = false;
  }

}
