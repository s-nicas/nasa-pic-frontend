import React, { Component } from 'react';
import './App.css';
import PhotosContainer from './containers/PhotosContainer'
import { BrowserRouter as Router, Route} from "react-router-dom"
import Home from './containers/Home'
import NavBar from './containers/NavBar'
import MarsContainer from './containers/MarsContainer'

import SearchInput from './containers/SearchInput'

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <Router>
        <div className="App">
          <Route path="/" exact component={PhotosContainer}/>
          <header className="App-header">

           </header>
        </div>
      </Router>
=======
    <Router>
      <div className="App">
        <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={SearchInput}/>
        <Route exact path="/photo" component={PhotosContainer}/>
        <Route exact path="/mars" component={MarsContainer} />
      </div>
    </Router>
>>>>>>> lastWed
    );
  }
}

export default App;

  // <Route exact path="/" component={SearchInput}/>
