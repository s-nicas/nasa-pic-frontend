import React, { Component } from 'react';
import './App.css';
import PhotosContainer from './containers/PhotosContainer'
import { BrowserRouter }  from 'react-router-dom'
import Route from 'react-router-dom/Route'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PhotosContainer/>
        </header>
      </div>
    );
  }
}

export default App;
