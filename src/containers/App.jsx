import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Player from './Player';
import Upload from './Upload';
import '../style/App.css';
import '../style/Player.css';
import '../style/Upload.css';
import '../style/default.css';

class App extends Component {
  render() {
    return (
      <div className="App">      
        {/* <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <Switch>
          <Route exact path='/' component={Player} />
          <Route exact path='/upload' component={Upload} />
        </Switch>
      </div>
    );
  }
}

export default App;
