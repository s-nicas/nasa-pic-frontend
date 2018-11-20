import React, { Component } from 'react';
import './App.css';
import SearchInput from './containers/SearchInput'
import PhotosContainer from './containers/PhotosContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchInput/>
        </header>
      </div>
    );
  }
}

export default App;
