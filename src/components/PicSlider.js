import React, { Component } from 'react';
import Slide from '../slide'
import LeftArrow from '../left-arrow'
import RightArrow from '../right-arrow'

class PicSlider extends Component {
  state = {
    images:[]
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

export default PicSlider
