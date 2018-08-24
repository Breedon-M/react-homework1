import React, { Component } from 'react';
import './App.css';
import List from './List/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Mat's React To-do List</h1>
        <List />
      </div>
    );
  }
}

export default App;
