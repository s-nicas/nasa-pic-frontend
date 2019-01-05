import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import NavBar from './components/NavBar';
import PicSliderContainer from './containers/PicSliderContainer';
import PhotosContainer from './containers/PhotosContainer';
import SearchPhoto from './components/SearchPhoto';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SearchPhoto} />
          <Route exact path="/photos/:date" component={PhotosContainer} />
          <Route exact path="/photos" component={PicSliderContainer} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
