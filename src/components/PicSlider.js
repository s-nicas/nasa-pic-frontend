import React, { Component } from 'react';
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import { connect } from 'react-redux'
import {fetchAllPhotos} from '../actions/picActions'

class PicSlider extends Component {
  state = {
    images:this.props.photos,
    currentIndex: 0
  }

  componentDidMount(){
    this.props.fetchAllPhotos();
    // should i call the fetch request here? Or how should i update state?
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

function mapStateToProps(state){
  return {photos: state.pictures}
}

export default connect(mapStateToProps, {fetchAllPhotos})(PicSlider)
