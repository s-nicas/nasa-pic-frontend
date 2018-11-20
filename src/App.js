import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchInput from './containers/SearchInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchInput />
        </header>
      </div>
    );
  }
}

export default App;
