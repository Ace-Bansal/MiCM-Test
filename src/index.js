import React, { Component } from 'react';
import { render } from 'react-dom';
import FetchTrial from './fetchTrial.js'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      age: 21
    };
  }

  render() {
    return (
      <div>
        <FetchTrial />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
