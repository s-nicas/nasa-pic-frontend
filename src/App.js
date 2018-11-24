import React, { Component } from 'react';
import './App.css';
import PhotosContainer from './containers/PhotosContainer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from './containers/Home'
import NavBar from './containers/NavBar'

import SearchInput from './containers/SearchInput'

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={SearchInput}/>
        <Route exact path="/photo" component={PhotosContainer}/>
      </div>
    </Router>
    );
  }
}

export default App;

  // <Route exact path="/" component={SearchInput}/>
