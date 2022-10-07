import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StateService } from '../state.service';

@Component({
  selector: 'app-add-stream-modal',
  templateUrl: './add-stream-modal.component.html',
  styleUrls: ['./add-stream-modal.component.css'],
})
export class AddStreamModalComponent implements OnInit {
  public addStreamForm: FormGroup;

  constructor(public State: StateService) {}

  ngOnInit(): void {
    //form
    this.addStreamForm = new FormGroup({
      api_key: new FormControl('', [Validators.required]),
      vehicle_id: new FormControl('', [Validators.required]),
      token: new FormControl('', [Validators.required]),
      source_id: new FormControl(0, [Validators.required]),
    });
  }

  addVideoStream() {
    // add stream details to an array
    this.State.videoStreamDetails.push(this.addStreamForm.value);
    this.State.showAddStreamModal = false;
  }
}
