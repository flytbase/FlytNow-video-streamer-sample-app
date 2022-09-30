import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VideoStreamComponent } from './video-stream/video-stream.component';
import { AddStreamModalComponent } from './add-stream-modal/add-stream-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VideoStreamComponent,
    AddStreamModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxSpinnerModule,
  ],
  providers: [CommonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
