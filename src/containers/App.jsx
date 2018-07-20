import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import update from 'immutability-helper';
import axios from 'axios';

import Hls from 'hls.js';
import XHRLoader from '../utils/XHRLoader';

import Main from './Main';
import Player from './Player';
import Upload from './Upload';
import '../style/App.css';
import '../style/Player.css';
import '../style/Upload.css';
import '../style/default.css';

class App extends Component {
  componentDidMount() {
    if (this.state.track.source) {
       
      if (Hls.isSupported()) {
        // var hls = new Hls();
        Hls.DefaultConfig.loader = XHRLoader;
        Hls.DefaultConfig.debug = false;
        if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(this.state.track.source);
          // let video = null;
          const audio = document.querySelector('#audio');
          hls.attachMedia(audio);
          // TODO: Error Handling (Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.)
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            console.log('hls manifest parsed');
          });
        }
        // hls.loadSource(this.state.track.source);
        // hls.attachMedia(audio);
        // hls.on(Hls.Events.MANIFEST_PARSED,function() {
        //   console.log('hls manifest load');
        // }); 
      }
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
      convertedTime: "00:00",
    },
  }
  
  updateTime = (timestamp) => {
    timestamp = Math.floor(timestamp);
    const newState = update(this.state, {
      now: {
        currentTime: { $set: timestamp },
      }   
    });
    this.setState(newState);
  }
  
  handleTogglePlay = () => {
    const { status } = this.state.now;
    const audio = document.getElementById('audio');
    let render;
    
    if (status === "play") {
      const newState = update(this.state, {
        now: {
          status: { $set: "pause" },
        }   
      });
      this.setState(newState);
      audio.pause();
      clearInterval(render);
    } else {
      if (this.state.track.source) {
        const newState = update(this.state, {
          now: {
            status: { $set: "play" },  
            totalTime: { $set: Math.floor(audio.duration) },
          }   
        });
        this.setState(newState);
        audio.play();
        let _this = this;
        render = setInterval(function() {
          _this.updateTime(document.getElementById('audio').currentTime);
        }, 100);
      }
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
            <Player {...props} now={now} onTogglePlay={this.handleTogglePlay} />
          )}/>
          <Route exact path='/upload' component={Upload} />
        </Switch>
        <audio id="audio"><source src={this.state.track.source} /></audio>
      </div>
    );
  }
}

export default App;
