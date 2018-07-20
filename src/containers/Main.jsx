import React, { Component } from 'react';

import Header from '../components/Header';
import MusicList from '../components/MusicList';
import PlayStatusBar from '../components/PlayStatusBar';

import '../style/Main.css';

class Main extends Component {
  componentDidMount() {
  }
  
  render() {
    const { now } = this.props;
    
    return (
      <div className="Main">
        <Header page="main" />
        <MusicList />
        <PlayStatusBar now={now} onTogglePlay={this.props.onTogglePlay} />
      </div>
    );
  }
}

export default Main;
