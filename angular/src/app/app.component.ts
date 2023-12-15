import { Component } from '@angular/core';
import { StateService } from './state.service';
import { setEnvironment } from '@flytnow/video-client-staging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public State: StateService) {
    // @TODO: set your URL here
    // setEnvironment(false, 'your url here');
    setEnvironment(true);
  }
}
