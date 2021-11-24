import React from 'react';
import './App.css';

// Importing the lib
import { VideoStreamer } from '@flytnow/video-client';

class App extends React.Component {
  componentDidMount() {
    let api_key = '';
    let vehicle_id = '';
    let source_id = 0;
    let element_id = 'maverick-feed';
    this.initFeed(api_key, vehicle_id, source_id, element_id);
  }

  async initFeed(api_key, vehicle_id, source_id, element_id) {
    // Instantiating VideoStreamer Object
    // which will expose all the API methods once connection is established
    let videoFeed = await new VideoStreamer(
      api_key,
      vehicle_id,
      source_id,
      element_id
    );

    if (videoFeed == null) {
      return;
    }

    // Checking for connection failure
    if (videoFeed['status'] === false) {
      console.log(
        'Something went wrong.',
        videoFeed['code'],
        videoFeed['message']
      );
    } else {
      //Connection Successful
      console.log(
        'Feed Active for ',
        vehicle_id,
        ' with source-id ',
        source_id
      );
    }
  }
  render() {
    return (
      <div className="App">
        <div className="feed-container">
          <div id="maverick-feed"></div>
        </div>
      </div>
    );
  }
}

export default App;
