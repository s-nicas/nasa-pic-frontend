import React, { Component } from 'react';
import './App.css';
import PhotosContainer from './containers/PhotosContainer'
import { BrowserRouter as Router, Route} from "react-router-dom"
import Home from './components/Home'
import NavBar from './components/NavBar'
import PicSliderContainer from './containers/PicSliderContainer'


import SearchPhoto from './components/SearchPhoto'

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={SearchPhoto}/>
        <Route exact path="/photos/:date" component={PhotosContainer}/>
        <Route exact path="/photos" component={PicSliderContainer} />
      </div>
    </Router>
    );
  }
}

export default App;
