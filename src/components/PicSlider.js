import React, { Component } from 'react';
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import { connect } from 'react-redux'
import {fetchAllPhotos} from '../actions/picActions'

class PicSlider extends Component {
  state = {
    images:[]
  }

  componentDidMount(){
    this.props.fetchAllPhotos();
    debugger
  }

  goToPrevSlide = () => {

  }

  goToNextSlide = () => {

}

  render() {
    return (
      <div className="slider">
      <Slide />

      <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
      <RightArrow goToNextSlide={this.goToNextSlide}/>
    </div>
    );
  }
}

export default connect(null, {fetchAllPhotos})(PicSlider)
