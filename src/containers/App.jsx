import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Hls from 'hls.js';

import Main from './Main';
import Player from './Player';
import Upload from './Upload';
import '../style/App.css';
import '../style/Player.css';
import '../style/Upload.css';
import '../style/default.css';

class App extends Component {
  componentDidMount() {
    const audio = document.getElementById('audio');
    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8');
      hls.attachMedia(audio);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
        console.log('hls manifest load');
      });
    }
  }
  
  state = {
    track: {
      source: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8'
    },
    now: {
      status: "stop",
      currentTime: 0,
      totalTime: 0,
      convertedTime: "00:00"
    },
  }
  
  updateTime = (timestamp) => {
    timestamp = Math.floor(timestamp);
    this.setState({ now: {currentTime: timestamp }});
  }
  
  convertTime = (timestamp) => {
    let minutes = Math.floor(timestamp / 60);
    let seconds = timestamp - (minutes * 60);
    if (seconds < 10) { seconds = '0' + seconds; }
    timestamp = minutes + ':' + seconds;
    return timestamp;
  }
  
  handleTogglePlay = () => {
    const { status, currentTime } = this.state.now;
    const audio = document.getElementById('audio');
    
    if (status === "play") {
      this.setState({
        now: {
          status: "pause",
        }
      });
      audio.pause();
    } else {
      this.setState({
        now: {
          status: "play",
        }
      });
      audio.play();
      let _this = this;
      setInterval(function() {
        _this.updateTime(currentTime);
        _this.setState({now: { convertedTime: _this.convertTime(currentTime)}});
      }, 100);
    }
  }
  
  render() {
    const { now } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) => (
            <Main {...props}
              now={now}
              onTogglePlay={this.handleTogglePlay}
            />
          )}/>
          <Route exact path="/player" render={(props) => (
            <Player {...props} now={now} />
          )}/>
          <Route exact path='/upload' component={Upload} />
        </Switch>
        <audio id="audio"><source src={this.state.track.source} /></audio>
      </div>
    );
  }
}

export default App;
