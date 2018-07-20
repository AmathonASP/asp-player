import React, { Component } from 'react';

import '../style/PlayStatusBar.css';

class PlayStatusBar extends Component {
  componentDidMount() {
    let styleSheet = document.styleSheets[0];
    
    let move = document.querySelector('.title .marquee').offsetWidth - 260;
    
    let keyframes =
    `@keyframes titleMarquee {
        0% {left: 0;}
        40% {left: -${move}px;}
        60% {left: -${move}px;}
        80% {left: 0;}
    }`;
    
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }
  
  handleTogglePlay = () => {
    this.props.onTogglePlay();
  }
  
  
  convertTime = (timestamp) => {
    let minutes = Math.floor(timestamp / 60);
    let seconds = timestamp - (minutes * 60);
    if (seconds < 10) { seconds = '0' + seconds; }
    timestamp = minutes + ':' + seconds;
    return timestamp;
  }
  
  
  render() {
    const { now } = this.props;
    return (
      <div className="play-status-bar">
        <ul className="play-status-bar__controls">
          <li className="repeat off" />
          <li className="backward" />
          { now.status === "pause" || now.status === "stop" ? 
            <li className="control play" onClick={this.handleTogglePlay}/>
            :
            <li className="control pause" onClick={this.handleTogglePlay}/>
          }
          <li className="forward" />
          <li className="random off" />
        </ul>
        <div className="play-status-bar__info">
          <div className="albumart" />
          <div className="music-info">
            <div className="title">
              <span className="marquee">
                Stranded (Feat. Broods, Reggie Watts, Saro)
              </span>
            </div>
            <div className="artist">
            Flight Facilities
            </div>
            <div className="gradient" />
          </div>
          <div className="time">
            <div className="now">{this.convertTime(now.currentTime)}</div>
            <div className="total">{this.convertTime(now.totalTime)}</div>
          </div>
        </div>
        <div className="play-status-bar__playlist-btn" />
      </div>  
    );
  }
}
// let style = {
//   animationName: 'titleMarquee',
//   animationTimingFunction: 'ease-in-out',
//   animationDuration: '5s',
//   animationDelay: '0.0s',
//   animationIterationCount: 'infinite',
// };

export default PlayStatusBar;

