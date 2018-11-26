import React, { Component } from 'react';
import './App.css';
import PhotosContainer from './containers/PhotosContainer'
import { BrowserRouter as Router, Route} from "react-router-dom"
import Home from './components/Home'
import NavBar from './components/NavBar'
import MarsContainer from './containers/MarsContainer'

import SearchInput from './components/SearchInput'

class App extends Component {
  render() {
    return (

    <Router>
      <div className="App">
        <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={SearchInput}/>
        <Route exact path="/photo" component={PhotosContainer}/>
        <Route exact path="/mars" component={MarsContainer} />
      </div>
    </Router>
    );
  }
}

export default App;

  // <Route exact path="/" component={SearchInput}/>
