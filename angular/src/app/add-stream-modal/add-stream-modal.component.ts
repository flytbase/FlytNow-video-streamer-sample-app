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
      // api_key: new FormControl(
      //   'NWU0MDAwMmU5NTA2YTcxM2ExMGRkMjUzNDA4M2Y2NGY0MDNmNDkwYmQ1OWRkMWNhMWFlYTQ4ZDk=',
      //   [Validators.required]
      // ),
      // vehicle_id: new FormControl('wVQv1qs6', [Validators.required]),
      // token: new FormControl('6e9560880e87b7ff1d633c852ac6d5a31881505f', [
      //   Validators.required,
      // ]),
      api_key: new FormControl(
        'NjE1YzY2NmE5ZjE5MTgyNDhlMmMwM2NiNGM4YTY5OWNhYTA5MGZiMzkxYjRjZTMwMDExMmY3ZTA=',
        [Validators.required]
      ),
      // QKSTWB2f 1zbY6EjJ
      vehicle_id: new FormControl('QKSTWB2f', [Validators.required]),
      token: new FormControl('bb84c840eaff94e84e11255d23aedfbeafd57aa1', [
        Validators.required,
      ]),
      source_id: new FormControl(0, [Validators.required]),
    });
  }

  addVideoStream() {
    // add stream details to an array
    this.State.videoStreamDetails.push(this.addStreamForm.value);
    this.State.showAddStreamModal = false;
  }
}
